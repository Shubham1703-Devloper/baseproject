import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
} from 'react-native';

import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event
} from 'react-native-track-player';


export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  }
  catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 2,
    });

    isSetup = true;
  }
  finally {
    return isSetup;
  }
}

export async function addTracks() {
  await TrackPlayer.add([
    {
      id: '1',
      url: require('./sample-6s.mp3'),
      title: 'Fluidity ',
      artist: 'tobylane',
      duration: 60,
    },
    {
      id: '2',
      url: require('./sample-9s.mp3'),
      title: 'Fluidity fgfg g fg ',
      artist: 'tobylane',
      duration: 60,
    },
    {
      id: '3',
      url: require('./sample-12s.mp3'),
      title: 'Fluidity fgf f gd',
      artist: 'tobylane',
      duration: 60,
    },
    {
      id: '4',
      url: require('./sample-15s.mp3'),
      title: 'Fluidity sdfsgf',
      artist: 'tobylane',
      duration: 60,
    },
    
  ]);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function playbackService() {
  // TODO: Attach remote event handlers
}
