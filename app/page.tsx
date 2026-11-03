export const dynamic = 'force-dynamic';

export default function AboutMe() {
  const serverTime = new Date().toLocaleString('ru-RU', {
    timeZone: 'UTC',
    dateStyle: 'full',
    timeStyle: 'long',
  });

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl text-center space-y-6">
        <div className="flex justify-center">
          <div className="h-28 w-28 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-3xl font-semibold text-gray-300">
            KK
          </div>
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Konstantine Konstantinov
          </h1>
          <p className="text-sm text-gray-400">Frontend Developer</p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm font-medium text-gray-200 transition hover:border-gray-500 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://t.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm font-medium text-gray-200 transition hover:border-gray-500 hover:text-white"
          >
            Telegram
          </a>
        </div>

        <div className="pt-2 border-t border-gray-800">
          <p className="text-xs text-gray-500">Дата и время на сервере:</p>
          <p className="text-sm text-gray-300 font-mono mt-1">{serverTime}</p>
        </div>
      </div>
    </div>
  );
}
