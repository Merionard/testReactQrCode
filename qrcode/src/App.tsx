import './App.css'
import Html5QrcodePlugin from './qecodePlugin';

const App = () => {

  const onNewScanResult = (decodedText: any, decodedResult: any) => {
    // handle decoded results here
  };

  return (
    <div className="App">
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
    </div>
  );
};

export default App
