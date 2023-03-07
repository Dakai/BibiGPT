import React from "react";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";

export function SwitchTimestamp(props: {
  checked: undefined | boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="mt-6 flex items-center justify-end space-x-2">
      <Switch
        id="timestamp-mode"
        checked={props.checked}
        onCheckedChange={props.onCheckedChange}
      />
      <Label htmlFor="timestamp-mode">是否显示时间戳</Label>
    </div>
  );
}