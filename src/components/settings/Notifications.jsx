import React, { useState } from "react";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";
import SettingSection from "./SettingSection";

const Notifications = () => {
  const [notification, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
  });
  return (
    <SettingSection icon={Bell} title={"Notifications"}>
      <ToggleSwitch
        label={"Push Notifications"}
        isOn={notification.push}
        OnToggle={() =>
          setNotifications({ ...notification, push: !notification.push })
        }
      />
      <ToggleSwitch
        label={"Email Notifications"}
        isOn={notification.email}
        OnToggle={() =>
          setNotifications({ ...notification, email: !notification.email })
        }
      />
      <ToggleSwitch
        label={"SMS Notifications"}
        isOn={notification.sms}
        OnToggle={() =>
          setNotifications({ ...notification, sms: !notification.sms })
        }
      />
    </SettingSection>
  );
};

export default Notifications;
