import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../store';
import axios from 'axios';

const VoiceCloning = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const { user } = useStore();

  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      setError('Không thể truy cập microphone');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('audio', file);

    try {
      const response = await axios.post('/api/voice/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      });

      setAudioUrl(URL.createObjectURL(file));
      setError('');
    } catch (error) {
      setError('Tải lên thất bại');
    }
  };

  const handleClone = async () => {
    if (!audioUrl) {
      setError('Vui lòng ghi âm hoặc tải lên file âm thanh');
      return;
    }

    try {
      const response = await axios.post('/api/voice/clone', {
        userId: user.id,
        audioUrl: audioUrl
      });

      if (response.data.success) {
        setError('');
        // Handle successful cloning
      }
    } catch (error) {
      setError('Nhân bản giọng nói thất bại');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Nhân bản giọng nói</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`px-4 py-2 rounded-md text-white ${
              isRecording ? 'bg-red-600' : 'bg-blue-600'
            }`}
          >
            {isRecording ? 'Dừng ghi âm' : 'Bắt đầu ghi âm'}
          </button>

          <div className="relative">
            <input
              type="file"
              accept="audio/*"
              onChange={handleUpload}
              className="hidden"
              id="audio-upload"
            />
            <label
              htmlFor="audio-upload"
              className="px-4 py-2 bg-gray-600 text-white rounded-md cursor-pointer"
            >
              Tải lên file âm thanh
            </label>
          </div>
        </div>

        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}

        {audioUrl && (
          <div className="mt-4">
            <audio controls src={audioUrl} className="w-full" />
          </div>
        )}
      </div>

      <button
        onClick={handleClone}
        className="w-full px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
      >
        Chuyển đổi giọng nói
      </button>

      <div className="mt-6 text-sm text-gray-600">
        <h3 className="font-bold mb-2">Hướng dẫn:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Ghi âm hoặc tải lên file âm thanh chất lượng tốt</li>
          <li>Nói rõ ràng và tự nhiên</li>
          <li>Thời lượng ghi âm tối thiểu 30 giây</li>
          <li>Tránh tiếng ồn xung quanh</li>
        </ul>
      </div>
    </div>
  );
};

export default VoiceCloning; 