import { createActor } from "@/backend";
import type { EnrollmentRequest } from "@/backend";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";
import {
  Apple,
  CheckCircle,
  Clock,
  CreditCard,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SiFacebook, SiInstagram } from "react-icons/si";

interface FormValues {
  parentName: string;
  childName: string;
  childAge: string;
  program: string;
  phone: string;
  email: string;
  message: string;
}

const AGE_OPTIONS = [
  { value: "18 months", label: "18 months" },
  { value: "2 years", label: "2 years" },
  { value: "3 years", label: "3 years" },
  { value: "4 years", label: "4 years" },
  { value: "5 years", label: "5 years" },
  { value: "6 years", label: "6 years" },
];

const PROGRAM_OPTIONS = [
  { value: "Playgroup", label: "🐣 Playgroup" },
  { value: "Day Care", label: "🌞 Day Care" },
  { value: "Nursery", label: "🌱 Nursery" },
  { value: "Junior Kids", label: "⭐ Junior Kids" },
  { value: "Senior Kids", label: "🎓 Senior Kids" },
  { value: "After School", label: "🎨 After School Activities" },
];

const WHY_ENROLL = [
  {
    icon: Shield,
    text: "Safe & secure CCTV-monitored campus",
    color: "#7C3AED",
  },
  {
    icon: Star,
    text: "Highly qualified & certified educators",
    color: "#EC4899",
  },
  { icon: Users, text: "Proven play-based learning methods", color: "#0D9488" },
  { icon: Apple, text: "Nutritious meals included daily", color: "#F97316" },
  { icon: CreditCard, text: "Government subsidies accepted", color: "#EAB308" },
];

const FLOAT_EMOJIS = [
  { emoji: "⭐", top: "10%", left: "2%", delay: "0s" },
  { emoji: "🎓", top: "30%", right: "3%", delay: "1.5s" },
  { emoji: "🌈", top: "65%", left: "5%", delay: "3s" },
  { emoji: "🚀", top: "80%", right: "4%", delay: "2s" },
];

export function EnrollSection() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef, { once: true, margin: "-50px" });
  const [submitted, setSubmitted] = useState(false);

  const { actor, isFetching } = useActor(createActor);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      parentName: "",
      childName: "",
      childAge: "",
      program: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormValues) => {
      if (!actor) throw new Error("Not connected");
      const req: EnrollmentRequest = {
        parentName: data.parentName,
        childName: data.childName,
        childAge: data.childAge,
        programInterest: data.program,
        phone: data.phone,
        email: data.email,
        message: data.message,
      };
      return actor.submitEnrollment(req);
    },
    onSuccess: () => {
      setSubmitted(true);
      reset();
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data);
  };

  const isLoading = mutation.isPending || isFetching;

  return (
    <section
      id="enroll"
      data-ocid="enroll.section"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FF7043 0%, #F06292 50%, #FF8A65 100%)",
      }}
    >
      {/* Decorative floating emojis */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {FLOAT_EMOJIS.map((item) => (
          <div
            key={item.emoji}
            className="absolute text-4xl opacity-25 float-animation"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              animationDelay: item.delay,
            }}
          >
            {item.emoji}
          </div>
        ))}
        {/* Soft blob decorations */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "#7C3AED" }}
        />
        <div
          className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "#EC4899" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-5">
            <span className="text-white text-sm font-body font-semibold">
              🎉 Enrollment Open 2024–2025
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight">
            Enroll Your Child Today! 🎉
          </h2>
          <p className="font-body text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Take the first step towards your child's bright future. Our
            admissions team will reach out within 24 hours to schedule a
            personal school tour.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* LEFT COLUMN — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact Details Card */}
            <div
              className="glass-card p-6"
              style={{
                background: "rgba(255,255,255,0.18)",
                borderColor: "rgba(255,255,255,0.35)",
              }}
            >
              <h3 className="font-display text-white text-2xl mb-5">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-display text-white text-sm">Address</p>
                    <p className="font-body text-white/80 text-sm leading-snug">
                      199 Matthew Boyd Crescent,
                      <br />
                      Newmarket, ON L3X 3C7
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-display text-white text-sm">Phone</p>
                    <a
                      href="tel:+19052358877"
                      className="font-body text-white/80 text-sm hover:text-white transition-colors"
                    >
                      (905) 235-8877
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-display text-white text-sm">Email</p>
                    <a
                      href="mailto:enroll@cutiepieplayschool.com"
                      className="font-body text-white/80 text-sm hover:text-white transition-colors break-all"
                    >
                      enroll@cutiepieplayschool.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-display text-white text-sm">Hours</p>
                    <p className="font-body text-white/80 text-sm">
                      Mon–Sat · 8:00 AM – 3:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/20">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  data-ocid="enroll.social.facebook"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <SiFacebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  data-ocid="enroll.social.instagram"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <SiInstagram className="w-4 h-4 text-white" />
                </a>
                <span className="font-body text-white/60 text-xs ml-1">
                  Follow us for updates!
                </span>
              </div>
            </div>

            {/* Why Enroll Card */}
            <div
              className="glass-card p-6"
              style={{
                background: "rgba(255,255,255,0.18)",
                borderColor: "rgba(255,255,255,0.35)",
              }}
            >
              <h3 className="font-display text-white text-xl mb-4">
                Why Enroll With Us?
              </h3>
              <div className="space-y-3">
                {WHY_ENROLL.map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: color }}
                    >
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <p className="font-body text-white/85 text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Enrollment Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-3xl p-7 md:p-9"
              style={{
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
                backdropFilter: "blur(20px)",
              }}
            >
              {submitted ? (
                <motion.div
                  data-ocid="enroll.success_state"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-center py-10"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{
                      background: "linear-gradient(135deg, #10B981, #34D399)",
                    }}
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3
                    className="font-display text-3xl mb-3"
                    style={{ color: "#10B981" }}
                  >
                    Application Received! 🎉
                  </h3>
                  <p className="font-body text-foreground/60 text-base max-w-xs mx-auto mb-6">
                    We'll contact you within 24 hours to schedule your school
                    tour.
                  </p>
                  <div className="flex justify-center gap-3">
                    {["🌟", "🌈", "🚀", "❤️", "🎓"].map((e) => (
                      <span key={e} className="text-2xl float-fast">
                        {e}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 font-body text-sm underline text-foreground/40 hover:text-foreground/70 transition-colors"
                  >
                    Submit another application
                  </button>
                </motion.div>
              ) : (
                <form
                  data-ocid="enroll.form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                  noValidate
                >
                  <div className="mb-2">
                    <h3
                      className="font-display text-2xl"
                      style={{ color: "#7C3AED" }}
                    >
                      Enrollment Application
                    </h3>
                    <p className="font-body text-foreground/50 text-sm mt-1">
                      All fields marked * are required
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Parent Name */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="parentName"
                        className="font-body font-semibold text-sm"
                      >
                        Parent Full Name *
                      </Label>
                      <Input
                        id="parentName"
                        data-ocid="enroll.parent_name.input"
                        placeholder="Your full name"
                        {...register("parentName", {
                          required: "Parent name is required",
                        })}
                        className={`rounded-xl font-body ${errors.parentName ? "border-red-400 focus:ring-red-400" : "focus:ring-purple-500"}`}
                        aria-invalid={!!errors.parentName}
                      />
                      {errors.parentName && (
                        <p
                          data-ocid="enroll.parent_name.field_error"
                          className="font-body text-red-500 text-xs"
                        >
                          {errors.parentName.message}
                        </p>
                      )}
                    </div>

                    {/* Child Name */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="childName"
                        className="font-body font-semibold text-sm"
                      >
                        Child's Full Name *
                      </Label>
                      <Input
                        id="childName"
                        data-ocid="enroll.child_name.input"
                        placeholder="Child's full name"
                        {...register("childName", {
                          required: "Child's name is required",
                        })}
                        className={`rounded-xl font-body ${errors.childName ? "border-red-400 focus:ring-red-400" : "focus:ring-purple-500"}`}
                        aria-invalid={!!errors.childName}
                      />
                      {errors.childName && (
                        <p
                          data-ocid="enroll.child_name.field_error"
                          className="font-body text-red-500 text-xs"
                        >
                          {errors.childName.message}
                        </p>
                      )}
                    </div>

                    {/* Child Age */}
                    <div className="space-y-1.5">
                      <Label className="font-body font-semibold text-sm">
                        Child's Age *
                      </Label>
                      <Controller
                        name="childAge"
                        control={control}
                        rules={{ required: "Please select child's age" }}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger
                              data-ocid="enroll.child_age.select"
                              className={`rounded-xl font-body ${errors.childAge ? "border-red-400" : ""}`}
                            >
                              <SelectValue placeholder="Select age" />
                            </SelectTrigger>
                            <SelectContent>
                              {AGE_OPTIONS.map((opt) => (
                                <SelectItem
                                  key={opt.value}
                                  value={opt.value}
                                  className="font-body"
                                >
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.childAge && (
                        <p
                          data-ocid="enroll.child_age.field_error"
                          className="font-body text-red-500 text-xs"
                        >
                          {errors.childAge.message}
                        </p>
                      )}
                    </div>

                    {/* Program Interest */}
                    <div className="space-y-1.5">
                      <Label className="font-body font-semibold text-sm">
                        Program Interest *
                      </Label>
                      <Controller
                        name="program"
                        control={control}
                        rules={{ required: "Please select a program" }}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger
                              data-ocid="enroll.program.select"
                              className={`rounded-xl font-body ${errors.program ? "border-red-400" : ""}`}
                            >
                              <SelectValue placeholder="Select program" />
                            </SelectTrigger>
                            <SelectContent>
                              {PROGRAM_OPTIONS.map((opt) => (
                                <SelectItem
                                  key={opt.value}
                                  value={opt.value}
                                  className="font-body"
                                >
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.program && (
                        <p
                          data-ocid="enroll.program.field_error"
                          className="font-body text-red-500 text-xs"
                        >
                          {errors.program.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="font-body font-semibold text-sm"
                      >
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        data-ocid="enroll.phone.input"
                        placeholder="(905) 000-0000"
                        {...register("phone", {
                          required: "Phone number is required",
                        })}
                        className={`rounded-xl font-body ${errors.phone ? "border-red-400 focus:ring-red-400" : "focus:ring-purple-500"}`}
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p
                          data-ocid="enroll.phone.field_error"
                          className="font-body text-red-500 text-xs"
                        >
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="font-body font-semibold text-sm"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        data-ocid="enroll.email.input"
                        placeholder="your@email.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Enter a valid email",
                          },
                        })}
                        className={`rounded-xl font-body ${errors.email ? "border-red-400 focus:ring-red-400" : "focus:ring-purple-500"}`}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p
                          data-ocid="enroll.email.field_error"
                          className="font-body text-red-500 text-xs"
                        >
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="font-body font-semibold text-sm"
                    >
                      Message / Special Requirements
                    </Label>
                    <Textarea
                      id="message"
                      data-ocid="enroll.message.textarea"
                      rows={3}
                      placeholder="Tell us about your child's interests, any special requirements, or questions..."
                      {...register("message")}
                      className="rounded-xl font-body resize-none focus:ring-purple-500"
                    />
                  </div>

                  {/* Error state */}
                  {mutation.isError && (
                    <div
                      data-ocid="enroll.error_state"
                      className="rounded-xl px-4 py-3 bg-red-50 border border-red-200 font-body text-red-600 text-sm"
                    >
                      Something went wrong. Please try again or call us
                      directly.
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    data-ocid="enroll.submit_button"
                    disabled={isLoading}
                    className="w-full py-4 rounded-2xl font-display text-lg text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-100 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                    style={{
                      background: "linear-gradient(135deg, #FF7043, #F06292)",
                    }}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-3">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      "Submit Enrollment →"
                    )}
                  </button>

                  <p className="font-body text-center text-foreground/40 text-xs">
                    By submitting, you agree to our Privacy Policy. We never
                    share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
