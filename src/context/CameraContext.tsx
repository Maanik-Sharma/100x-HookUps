import { createContext, useContext, useState } from 'react';

type CameraContextType = {
  stream: MediaStream | null;
  setStream: (stream: MediaStream | null) => void;
};

const CameraContext = createContext<CameraContextType>({ stream: null, setStream: () => {} });
export const useCamera = () => useContext(CameraContext);
export const CameraProvider = ({ children }: { children: React.ReactNode }) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  return (
    <CameraContext.Provider value={{ stream, setStream }}>
      {children}
    </CameraContext.Provider>
  );
};