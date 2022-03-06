package com.streamio;

import android.media.AudioFormat;
import android.media.AudioManager;
import android.media.AudioTrack;
import android.util.Base64;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.Arrays;
import java.util.Enumeration;

public class AudioReceiver extends ReactContextBaseJavaModule {
    AudioTrack audioTrack;
    AudioReceiver(ReactApplicationContext context) {
        super(context);
        int SAMPLE_RATE = 11025;
        int bufferSize = AudioTrack.getMinBufferSize(SAMPLE_RATE, AudioFormat.CHANNEL_CONFIGURATION_MONO,
                AudioFormat.ENCODING_PCM_16BIT);
        Log.e("Activity", ""+bufferSize);
        audioTrack = new AudioTrack(AudioManager.STREAM_MUSIC, SAMPLE_RATE,
                AudioFormat.CHANNEL_CONFIGURATION_MONO,
                AudioFormat.ENCODING_MP3,
                bufferSize,
                AudioTrack.MODE_STREAM
        );
        audioTrack.play();
    }

    @NonNull
    @Override
    public String getName() {
        return "AudioReceiver";
    }

    @ReactMethod()
    public void pausePlay() {
        audioTrack.pause();
    }

    @ReactMethod()
    public void resume() {
        audioTrack.play();
    }

    @ReactMethod()
    public void playAudio(String data) {
        byte[] bdata = Base64.decode(data, Base64.DEFAULT);
        Log.e("DATA", "" + Arrays.toString(bdata));
        audioTrack.write(bdata, 0, bdata.length);
    }

    @ReactMethod()
    public String getHostAddress(Callback callback) {
        try {
            for (Enumeration<NetworkInterface> en = NetworkInterface.getNetworkInterfaces(); en
                    .hasMoreElements();) {
                NetworkInterface intf = en.nextElement();
                if (intf.getName().contains("wlan")) {
                    for (Enumeration<InetAddress> enumIpAddr = intf.getInetAddresses(); enumIpAddr
                            .hasMoreElements();) {
                        InetAddress inetAddress = enumIpAddr.nextElement();
                        if (!inetAddress.isLoopbackAddress()
                                && (inetAddress.getAddress().length == 4)) {
                            Log.d("IPADDRESS", inetAddress.getHostAddress());
                            callback.invoke(inetAddress.getHostAddress());
                        }
                    }
                }
            }
        } catch (SocketException ex) {
            Log.e("IPADDRESS", ex.toString());
        }
        return null;
    }
}
