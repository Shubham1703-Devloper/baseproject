import React, {useEffect, useState} from 'react';
import {setupPlayer, addTracks} from './trackPlayerServices';
// ...

import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
} from 'react-native-track-player';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Slider,
} from 'react-native';


function PlaylistItem({item,index, title, isCurrent}) {

  function handleItemPress() {
    TrackPlayer.skip(index);
  }

  return (
    <TouchableOpacity
      style={[
        index
          ? styles.ItemView
          : {
              backgroundColor: 'lightgreen',
              padding: 10,
              marginVertical: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'black',
              justifyContent: 'center',
            },
      ]}
      onPress={()=>{
        handleItemPress()
        }}>
      <Text style={styles.ItemText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default MusicPlayer = () => {
  const [queue, setQueue] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [play, setIsPlay] = useState(false);
  const [TimeElapsed ,setTimeElapsed] = useState(0)
  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks();
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  async function loadPlaylist() {
    const queue = await TrackPlayer.getQueue();
    setQueue(queue);
  }

  useEffect(() => {
    loadPlaylist();
  }, []);


  const changeTime = async (seconds) => {
    // 50 / duration
    let seektime = (seconds / 100) * duration;
    setTimeElapsed(seektime);
    TrackPlayer.seekToPlayer(seektime);
  };



  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.playlist}>
          <FlatList
            data={queue}
            renderItem={({item, index}) => (
              <PlaylistItem
               item = {item}
                index={index}
                title={item.title}
                isCurrent={currentTrack == index}
              />
            )}
          />
        </View>
      
        <Slider
  minimumValue={0}
  maximumValue={100}
  trackStyle={styles.track}
  thumbStyle={styles.thumb}
  // value={percent}
  minimumTrackTintColor="#93A8B3"
  onValueChange={(seconds) => changeTime(seconds)}
/>

      </View>
      
     

      <Button
        title={play ? 'Play' : 'Pouse'}
        color="#777"
        onPress={() => {
          setIsPlay(!play);
          play ? TrackPlayer.play() : TrackPlayer.pause();
        }}
      />
      <Button
        title="skipToNext"
        color="#777"
        onPress={() => TrackPlayer.skipToNext}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
container: {padding:20},
  playlist: {
    justifyContent: 'center',
    marginBottom: 40,
  },
  ItemText: {
    margin: 20,
  },
  ItemView: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
  },
});
