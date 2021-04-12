import React from 'react'
import {View, StyleSheet} from 'react-native'
import * as Permissions from "expo-permissions"
import * as Notifications from 'expo-notifications'
import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTIFICATION_KEY = 'hafsah:notification'

export function clearLocalNotifications() {
    AsyncStorage.removeItem(NOTIFICATION_KEY).then(
      Notifications.cancelAllScheduledNotificationsAsync
    );
  }

function createNotification (){
    return{
        title: 'Practice Time',
        body: "Don't forget to practice today",
        ios:{
            sound: true
        },
        android:{
            sound: true,
            priority: "high",
            vibrate: true,
            sticky: false
        }
    }
}
export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then(data => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
            if (status === "granted") {
              Notifications.cancelAllScheduledNotificationsAsync();
  
              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);
  
              Notifications.scheduleLocalNotificationAsync(createNotification(), {
                time: tomorrow,
                repeat: "day"
              });
  
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
        }
      });
  }