import { useCallback, useEffect } from 'react';

export default function TranscriptionsDataTrack({ track }: { track: any }) {

  const onMessage = useCallback(
    (message: string) => {
      const transcription = JSON.parse(message) as any;
      console.log('transcription', transcription);
    },
    []
  );

  useEffect(() => {
    track.on('message', onMessage);
  }, [track]);

  return null;
}
