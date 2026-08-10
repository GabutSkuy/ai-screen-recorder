import { useState } from 'react'
import { 
  Monitor, 
  MousePointerClick, 
  Scissors, 
  Play, 
  Download,
  Heart,
  Coffee,
  Star,
  Bitcoin
} from 'lucide-react'

function App() {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [selectedRegion, setSelectedRegion] = useState<'full' | 'window' | 'custom'>('full')
  
  const startRecording = () => {
    setIsRecording(true)
    setRecordingTime(0)
  }
  
  const stopRecording = () => {
    setIsRecording(false)
  }
  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Monitor className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">AI Screen Recorder</h1>
              <p className="text-xs text-slate-400">Record & edit in minutes, not hours</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/sponsors/Azzzz" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-sm"
            >
              <Heart className="w-4 h-4 text-rose-500" />
              Sponsor
            </a>
            <a 
              href="https://buymeacoffee.com/Azzzz" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded-lg transition-colors text-sm"
            >
              <Coffee className="w-4 h-4" />
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Record screens <span className="gradient-text">like a pro</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            AI-powered auto-crop, smart transitions, and one-click editing. 
            Free forever, open source, no watermarks.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>No Watermark</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Cross-Platform</span>
            </div>
          </div>
        </div>

        {/* Recording Controls */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Controls Panel */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Monitor className="w-5 h-5 text-sky-500" />
              Recording Settings
            </h3>
            
            {/* Region Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Recording Region
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setSelectedRegion('full')}
                  className={`p-3 rounded-lg border transition-all ${
                    selectedRegion === 'full'
                      ? 'border-sky-500 bg-sky-500/20 text-sky-400'
                      : 'border-slate-600 hover:border-slate-500 text-slate-400'
                  }`}
                >
                  <Monitor className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-xs">Full Screen</span>
                </button>
                <button
                  onClick={() => setSelectedRegion('window')}
                  className={`p-3 rounded-lg border transition-all ${
                    selectedRegion === 'window'
                      ? 'border-sky-500 bg-sky-500/20 text-sky-400'
                      : 'border-slate-600 hover:border-slate-500 text-slate-400'
                  }`}
                >
                  <div className="w-6 h-6 mx-auto mb-2 border-2 border-current rounded" />
                  <span className="text-xs">Window</span>
                </button>
                <button
                  onClick={() => setSelectedRegion('custom')}
                  className={`p-3 rounded-lg border transition-all ${
                    selectedRegion === 'custom'
                      ? 'border-sky-500 bg-sky-500/20 text-sky-400'
                      : 'border-slate-600 hover:border-slate-500 text-slate-400'
                  }`}
                >
                  <div className="w-6 h-6 mx-auto mb-2 border-2 border-dashed border-current rounded" />
                  <span className="text-xs">Custom</span>
                </button>
              </div>
            </div>

            {/* AI Features */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-300 mb-3">
                AI Features
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg cursor-pointer hover:bg-slate-900 transition-colors">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-600 text-sky-500 focus:ring-sky-500" />
                  <MousePointerClick className="w-4 h-4 text-sky-500" />
                  <span className="text-sm">Auto-detect clicks</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg cursor-pointer hover:bg-slate-900 transition-colors">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-slate-600 text-sky-500 focus:ring-sky-500" />
                  <Scissors className="w-4 h-4 text-sky-500" />
                  <span className="text-sm">Auto-crop & zoom</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg cursor-pointer hover:bg-slate-900 transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-600 text-sky-500 focus:ring-sky-500" />
                  <Play className="w-4 h-4 text-sky-500" />
                  <span className="text-sm">Auto-transitions</span>
                </label>
              </div>
            </div>

            {/* Record Button */}
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                isRecording
                  ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                  : 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white'
              }`}
            >
              {isRecording ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-3 h-3 bg-white rounded-full" />
                  Stop Recording
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Start Recording
                </span>
              )}
            </button>

            {isRecording && (
              <div className="mt-4 text-center">
                <span className="text-2xl font-mono font-bold text-rose-400">
                  {Math.floor(recordingTime / 60).toString().padStart(2, '0')}:{(recordingTime % 60).toString().padStart(2, '0')}
                </span>
                <p className="text-sm text-slate-400 mt-1">Recording in progress...</p>
              </div>
            )}
          </div>

          {/* Preview Panel */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Play className="w-5 h-5 text-sky-500" />
              Preview
            </h3>
            
            <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center mb-4">
              {isRecording ? (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    <span className="absolute inset-0 bg-rose-500 rounded-full animate-ping opacity-75" />
                    <span className="relative w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center">
                      <span className="w-6 h-6 bg-white rounded-full" />
                    </span>
                  </div>
                  <p className="text-rose-400 font-semibold">Recording...</p>
                  <p className="text-slate-500 text-sm mt-1">AI is processing in real-time</p>
                </div>
              ) : (
                <div className="text-center text-slate-500">
                  <Monitor className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Click "Start Recording" to begin</p>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Resolution</span>
                <span className="text-slate-200">1920 × 1080</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">FPS</span>
                <span className="text-slate-200">60</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Format</span>
                <span className="text-slate-200">MP4 (H.264)</span>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!isRecording && recordingTime === 0}>
              <Download className="w-4 h-4" />
              Export Video
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-sky-500/50 transition-colors">
            <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center mb-4">
              <MousePointerClick className="w-6 h-6 text-sky-500" />
            </div>
            <h4 className="font-semibold mb-2">Smart Click Detection</h4>
            <p className="text-slate-400 text-sm">
              AI automatically highlights your clicks and scrolls, making tutorials easier to follow.
            </p>
          </div>
          
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-sky-500/50 transition-colors">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
              <Scissors className="w-6 h-6 text-indigo-500" />
            </div>
            <h4 className="font-semibold mb-2">Auto-Crop & Zoom</h4>
            <p className="text-slate-400 text-sm">
              Smart region detection automatically crops to active areas and adds professional zooms.
            </p>
          </div>
          
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-sky-500/50 transition-colors">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <Play className="w-6 h-6 text-purple-500" />
            </div>
            <h4 className="font-semibold mb-2">One-Click Transitions</h4>
            <p className="text-slate-400 text-sm">
              Professional fade, zoom, and slide transitions applied automatically.
            </p>
          </div>
        </div>

        {/* Support Banner */}
        <div className="mt-16 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 rounded-2xl p-8 border border-sky-500/20 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Love this tool?</h3>
          <p className="text-slate-400 mb-6">
            AI Screen Recorder is free and open source. If it helps you, consider supporting its development!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/sponsors/Azzzz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Sponsor on GitHub
            </a>
            <a 
              href="https://buymeacoffee.com/Azzzz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Coffee className="w-5 h-5" />
              Buy Me a Coffee
            </a>
            <a 
              href="https://tronscan.org/#/address/TBrPYnKyp3P4aByGNeetdjSTPBAeAaZdD4"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Bitcoin className="w-5 h-5" />
              USDT (TRC20)
            </a>
          </div>
          <div className="mt-6 p-4 bg-slate-800/50 rounded-lg inline-block">
            <p className="text-sm text-slate-400 mb-2">Crypto Donation (USDT TRC20):</p>
            <code className="text-emerald-400 text-xs break-all">TBrPYnKyp3P4aByGNeetdjSTPBAeAaZdD4</code>
          </div>
          <p className="text-slate-500 text-sm mt-4">
            Email: ridhoefendi02@gmail.com
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16 py-8 text-center text-slate-500 text-sm">
        <p>Made with ❤️ by AI Screen Recorder Team</p>
        <p className="mt-2">
          <a href="https://github.com/Azzzz/ai-screen-recorder" className="hover:text-sky-400 transition-colors">GitHub</a>
          <span className="mx-2">•</span>
          <a href="mailto:ridhoefendi02@gmail.com" className="hover:text-sky-400 transition-colors">Email</a>
          <span className="mx-2">•</span>
          <a href="https://github.com/sponsors/Azzzz" className="hover:text-sky-400 transition-colors">Sponsor</a>
        </p>
      </footer>
    </div>
  )
}

export default App
