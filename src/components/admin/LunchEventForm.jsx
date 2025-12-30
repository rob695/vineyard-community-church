import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Upload, Image as ImageIcon } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function LunchEventForm({ event, onSave, onCancel }) {
  const [formData, setFormData] = useState(event || {
    title: "Newcomers' Lunch",
    date: "",
    time: "12:30 PM",
    location: "The Gee's Home",
    description: "Join us for a relaxed lunch where you can meet the leadership team, ask questions, and get to know our church family better.",
    image_url: "",
    is_active: true
  });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(formData);
    } finally {
      setSaving(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setFormData({ ...formData, image_url: file_url });
    } catch (error) {
      alert("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-light text-[#1e3a5f]">
          {event ? "Edit" : "Create"} Lunch Event
        </h3>
        <Button type="button" variant="ghost" size="icon" onClick={onCancel}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Event Title *</label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          placeholder="Newcomers' Lunch"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date *</label>
          <Input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Time *</label>
          <Input
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            required
            placeholder="12:30 PM"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
        <Input
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          required
          placeholder="The Gee's Home"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
        <Textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
          rows={4}
          placeholder="Event description..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Event Image</label>
        <div className="space-y-4">
          {formData.image_url && (
            <div className="relative w-full h-48 rounded-xl overflow-hidden">
              <img
                src={formData.image_url}
                alt="Event preview"
                className="w-full h-full object-cover"
              />
              <Button
                type="button"
                size="sm"
                variant="destructive"
                className="absolute top-2 right-2"
                onClick={() => setFormData({ ...formData, image_url: "" })}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          )}
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="event-image-upload"
              disabled={uploading}
            />
            <label htmlFor="event-image-upload">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                disabled={uploading}
                asChild
              >
                <span className="flex items-center gap-2 cursor-pointer">
                  {uploading ? (
                    <>
                      <Upload className="w-4 h-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-4 h-4" />
                      {formData.image_url ? "Change Image" : "Upload Image"}
                    </>
                  )}
                </span>
              </Button>
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-3 justify-end">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={saving}
          className="bg-[#1e3a5f] hover:bg-[#2a4a6f]"
        >
          {saving ? "Saving..." : "Save Event"}
        </Button>
      </div>
    </form>
  );
}