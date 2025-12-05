import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }

    if (!agreeTerms) {
      toast({
        title: "Accept Terms",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account Created! 🎉",
        description: "Welcome to GoAalsi! Start your lazy shopping journey.",
      });
    }, 1500);
  };

  const passwordStrength = () => {
    const { password } = formData;
    if (password.length === 0) return null;
    if (password.length < 6) return { label: "Weak", color: "bg-destructive", width: "w-1/3" };
    if (password.length < 10) return { label: "Medium", color: "bg-sunshine", width: "w-2/3" };
    return { label: "Strong", color: "bg-success", width: "w-full" };
  };

  const strength = passwordStrength();

  return (
    <div className="min-h-screen bg-background flex">
      <Helmet>
        <title>Create Account | GoAalsi</title>
        <meta name="description" content="Create your GoAalsi account and start shopping" />
      </Helmet>

      {/* Left Side - Hero */}
      <div className="hidden lg:flex flex-1 bg-gradient-hero items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center text-primary-foreground"
        >
          <span className="text-8xl mb-6 block">🛋️</span>
          <h2 className="text-3xl font-bold mb-4">Join the Lazy Revolution</h2>
          <p className="text-primary-foreground/80 max-w-md mb-8">
            Create your account in seconds and unlock exclusive deals, easy tracking, and the laziest shopping experience ever.
          </p>
          <div className="flex justify-center gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold">50K+</p>
              <p className="text-sm text-primary-foreground/70">Happy Lazies</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">70%</p>
              <p className="text-sm text-primary-foreground/70">Max Discount</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">24hr</p>
              <p className="text-sm text-primary-foreground/70">Delivery</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">G</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">GoAalsi</h1>
              <p className="text-xs text-muted-foreground">Super lazy shopping</p>
            </div>
          </Link>

          <div className="card-elevated p-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Create Account</h2>
            <p className="text-muted-foreground mb-8">
              Join GoAalsi and start saving today
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field pl-12"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field pl-12"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input-field pl-12 pr-12"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {strength && (
                  <div className="mt-2">
                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                      <div className={`h-full ${strength.color} ${strength.width} transition-all`} />
                    </div>
                    <p className={`text-xs mt-1 ${strength.color === 'bg-destructive' ? 'text-destructive' : strength.color === 'bg-sunshine' ? 'text-sunshine-dark' : 'text-success'}`}>
                      {strength.label} password
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="input-field pl-12"
                    placeholder="••••••••"
                    required
                  />
                  {formData.confirmPassword && formData.password === formData.confirmPassword && (
                    <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-success" />
                  )}
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 mt-1 rounded border-border text-goaalsi-blue focus:ring-goaalsi-blue"
                />
                <span className="text-sm text-muted-foreground">
                  I agree to the{" "}
                  <Link to="/terms" className="text-goaalsi-blue hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-goaalsi-blue hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-goaalsi-blue hover:bg-goaalsi-blue-dark h-12 gap-2"
              >
                {isLoading ? (
                  <span className="animate-pulse">Creating account...</span>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>

            {/* Login Link */}
            <p className="text-center text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link
                to="/auth/login"
                className="text-goaalsi-blue hover:text-goaalsi-blue-dark font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
