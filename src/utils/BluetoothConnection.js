import BleManager from "react-native-ble-plx";

const initializeBluetooth = () => {
  BleManager.start({ showAlert: false })
    .then(() => {
      console.log("Bluetooth initialized");
      enableBluetooth();
      startNotification();
    })
    .catch((error) => {
      console.error("Error initializing Bluetooth:", error);
    });
};

const startNotification = () => {
  BleManager.enableBluetooth()
    .then(() => {
      console.log("Bluetooth enabled");
      BleManager.scan([], 5, true)
        .then(() => {
          console.log("Scanning started");
          BleManager.startNotification(
            "YOUR_DEVICE_UUID",
            "YOUR_CHARACTERISTIC_UUID"
          )
            .then(() => {
              console.log("Notification started");
              BleManager.onCharacteristicValue(
                "YOUR_DEVICE_UUID",
                "YOUR_CHARACTERISTIC_UUID",
                (error, characteristic) => {
                  if (error) {
                    console.error("Error receiving data:", error);
                  } else {
                    const receivedValue = characteristic.value;
                    console.log("Received data:", receivedValue);
                    // Process received data as needed
                  }
                }
              );
            })
            .catch((error) => {
              console.error("Error starting notification:", error);
            });
        })
        .catch((error) => {
          console.error("Error scanning devices:", error);
        });
    })
    .catch((error) => {
      console.error("Error enabling Bluetooth:", error);
    });
};

export default initializeBluetooth;
