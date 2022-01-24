import { LocalNotifications } from "@capacitor/local-notifications";

export const timer = function (timeElapsed, timeRequired) {
  if (
    timeRequired.hours === timeElapsed.seconds &&
    timeElapsed.minutes === timeRequired.minutes &&
    timeRequired.seconds === timeElapsed.seconds
  ) {
    return false;
  }
  timeElapsed.seconds++;
  if (timeElapsed.seconds >= 60) {
    timeElapsed.minutes++;
    timeElapsed.seconds = 0;
  }
  if (timeElapsed.minutes >= 60) {
    timeElapsed.hours++;
    timeElapsed.minutes = 0;
  }
  return true;
  // console.log(timeElapsed.seconds);
};
export let pushNotification = async function timerNotification(
  taskIndex,
  title,
  timeLeft,
  taskId = -1
) {
  await LocalNotifications.requestPermissions();
  await LocalNotifications.schedule({
    notifications: [
      {
        title: title,
        body: timeLeft,
        extra: {
          taskId,
        },
        id: taskIndex,
        ongoing: true,
      },
    ],
  });
};
