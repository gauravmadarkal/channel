package com.streamio;

import android.content.Intent;
import android.media.AudioFormat;
import android.media.AudioManager;
import android.media.AudioTrack;
import android.os.Bundle;
import android.util.Base64;
import android.util.Log;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
  AudioTrack audioTrack;
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "streamio";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    Log.e("Activity", "On create called again");
    super.onCreate(savedInstanceState);
    int minBufferSize = AudioTrack.getMinBufferSize(44100, AudioFormat.CHANNEL_CONFIGURATION_MONO,
            AudioFormat.ENCODING_PCM_16BIT);
    audioTrack = new AudioTrack(AudioManager.STREAM_MUSIC, 44100,
            AudioFormat.CHANNEL_CONFIGURATION_MONO,
            AudioFormat.ENCODING_PCM_16BIT,
            minBufferSize,
            AudioTrack.MODE_STREAM
    );
    audioTrack.play();
    Intent intent = getIntent();
    String data = intent.getStringExtra("data");
    if (data != null) {
      playAudio(data);
    }
  }

  private void playAudio(String bData) {
    byte[] data = Base64.decode(bData, Base64.DEFAULT);
    Log.e("Activity", bData);
    audioTrack.write(data, 0, data.length);
  }
}
