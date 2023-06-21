import * as SMS from "expo-sms";

export default sendSMS = async (emergencyContacts) => {
  const numbersArray = emergencyContacts.map(({ number }) => {
    return number;
  });
  const { result } = await SMS.sendSMSAsync(
    numbersArray,
    "I'd like to add you as an emergency contact in my Smart Ride App, Thanks!"
  );
  return true;
};
