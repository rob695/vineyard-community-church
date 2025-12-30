import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { base44 } from "@/api/base44Client";
import { Upload, X } from "lucide-react";

export default function TeamMemberForm({ member, onSave, onCancel }) {
  const [formData, setFormData] = useState(member || {
    name: "",
    role: "",
    bio: "",
    image_url: "",
    order: 0
  });
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(formData);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-light text-[#1e3a5f]">
          {member ? "Edit" : "Add"} Team Member
        </h3>
        <Button type="button" variant="ghost" size="icon" onClick={onCancel}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
        <Input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          placeholder="John Smith"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Role *</label>
        <Input
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          required
          placeholder="Lead Pastor"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Bio *</label>
        <Textarea
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          required
          rows={4}
          placeholder="Brief biography..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image *</label>
        {formData.image_url ? (
          <div className="relative inline-block">
            <img
              src={formData.image_url}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute -top-2 -right-2"
              onClick={() => setFormData({ ...formData, image_url: "" })}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
              disabled={uploading}
            />
            <label
              htmlFor="image-upload"
              className="flex items-center justify-center gap-2 px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#d4a853] cursor-pointer transition-colors"
            >
              <Upload className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600">
                {uploading ? "Uploading..." : "Click to upload image"}
              </span>
            </label>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Display Order</label>
        <Input
          type="number"
          value={formData.order}
          onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
          placeholder="0"
        />
      </div>

      <div className="flex gap-3 justify-end">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={saving || uploading}
          className="bg-[#1e3a5f] hover:bg-[#2a4a6f]"
        >
          {saving ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
}