import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { base44 } from "@/api/base44Client";

export default function SignupModal({ group, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    member_name: "",
    member_email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await base44.functions.invoke('submitLifeGroupSignup', {
        group_id: group.id,
        group_title: group.title,
        day_of_week: group.day_of_week,
        time: group.time,
        location: group.location,
        leader_name: group.leader_name,
        ...formData,
      });

      if (response.data.success) {
        onSuccess();
      } else {
        alert(`Failed to submit signup: ${response.data.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Signup error:', error);
      const errorMsg = error.response?.data?.error || error.message || 'Unknown error';
      alert(`An error occurred: ${errorMsg}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-light text-[#1e3a5f]">
              Join <span className="text-[#d4a853]">{group.title}</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {group.day_of_week} at {group.time}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <Input
              type="text"
              value={formData.member_name}
              onChange={(e) => setFormData({ ...formData, member_name: e.target.value })}
              required
              placeholder="Your full name"
              className="h-12 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <Input
              type="email"
              value={formData.member_email}
              onChange={(e) => setFormData({ ...formData, member_email: e.target.value })}
              required
              placeholder="your.email@example.com"
              className="h-12 rounded-xl"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 h-12 rounded-xl"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 h-12 bg-[#1e3a5f] hover:bg-[#2a4a6f] rounded-xl"
            >
              {isSubmitting ? "Submitting..." : "Sign Up"}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}