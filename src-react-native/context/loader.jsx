import { createContext, useContext, useMemo, useState } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import tw from 'tailwind';

const LoaderContext = createContext();

export function LoaderContextProvider({ children }) {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <LoaderContext.Provider
      value={useMemo(
        () => ({
          show: () => setShowLoader(true),
          hide: () => setShowLoader(false)
        }),
        []
      )}
    >
      {showLoader && (
        <Modal transparent>
          <View
            style={tw`items-center justify-center flex-1 bg-[rgba(0,0,0,0.15)]`}
          >
            <ActivityIndicator size="large" />
          </View>
        </Modal>
      )}
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoaderContext);

  return context;
}
