import { useState } from 'react'
import { Crown, Check, CreditCard, Shield, Sparkles } from 'lucide-react'

const vipPlans = [
  {
    title: 'BRONCE',
    price: '$5',
    features: ['Acceso VIP', '10% de descuento en tiendas', 'Emote exclusivo'],
  },
  {
    title: 'PLATA',
    price: '$12',
    features: ['Todo de Bronce', 'Vehículo VIP', 'Bonus de experiencia', 'Chat exclusivo'],
  },
  {
    title: 'ORO',
    price: '$25',
    features: ['Todo de Plata', 'Spawn personalizado', 'Soporte prioritario', 'Item legendario'],
  },
]

function App() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText('176.116.1.11:20002')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="min-h-screen text-white px-4 py-6 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-black/60 -z-0" />
      <div className="mx-auto max-w-7xl relative z-10">
        <header className="mb-12 flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-xl">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-500 to-amber-900 text-black shadow-lg shadow-gold/20">
              <Crown className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-400">ZETA RP</p>
              <p className="text-xs text-white/70">VIP RANGE</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#plans" className="transition hover:text-amber-400">Paquetes</a>
            <a href="#hero" className="transition hover:text-amber-400">Inicio</a>
          </nav>
        </header>

        <main>
          <section id="hero" className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-400 shadow-glow shadow-gold/20">
                <Sparkles className="h-4 w-4" />
                <span>Rangos VIP exclusivos para ZETA RP</span>
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl font-black tracking-tight text-amber-400 sm:text-6xl">
                  HAZTE VIP EN ZETA RP
                </h1>
                <p className="max-w-xl text-lg text-white/70">
                  Desbloquea beneficios exclusivos y eleva tu experiencia en el servidor con acceso prioritario, recompensas especiales y soporte VIP.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-3 rounded-2xl border border-amber-500/20 bg-amber-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                >
                  <span>{copied ? 'Copiado' : 'Copiar IP'}</span>
                  <span className="font-mono text-sm text-white/60">176.116.1.11:20002</span>
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.24),_transparent_35%)]" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/40 p-5">
                  <div>
                    <p className="inline-block text-sm uppercase tracking-[0.32em] bg-black/40 border border-amber-500/20 px-3 py-1 rounded text-amber-400">Servidor</p>
                    <h2 className="text-2xl font-bold text-white">ZETA RP</h2>
                  </div>
                  <div className="rounded-3xl bg-amber-500/15 p-3 text-amber-400">
                    <Crown className="h-6 w-6" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-1">
                  <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
                    <p className="text-sm text-white/60">Rango promedio</p>
                    <p className="mt-2 text-3xl font-semibold text-white">Aventurero</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-amber-500/20 bg-black/40 p-5 text-sm text-white/60">
                  <p>
                    Únete a la élite de ZETA RP y aprovecha un servidor diseñado para roleplay intenso con estilo y privilegios VIP.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-sm text-amber-400 shadow-glow shadow-gold/20">
                <Sparkles className="h-4 w-4" />
                <span>Promociones especiales</span>
              </div>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                GANGAS DISPONIBLES 🔥
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-glow backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Gangazo Bronce</p>
                    <p className="mt-3 text-4xl font-black text-white">$4.50 USD</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gold/15 text-gold">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/60">Antes $5</p>
                <a
                  href="https://www.paypal.me/DequanWilliams622/4.50?note=Gangazo-Bronce-ZetaRP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-amber-500 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-amber-600"
                >
                  Comprar Ganga
                </a>
              </article>

              <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-glow backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Gangazo Plata</p>
                    <p className="mt-3 text-4xl font-black text-white">$10 USD</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gold/15 text-gold">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/60">Antes $12</p>
                <a
                  href="https://www.paypal.me/DequanWilliams622/10?note=Gangazo-Plata-ZetaRP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-amber-500 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-amber-600"
                >
                  Comprar Ganga
                </a>
              </article>

              <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-glow backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Gangazo Oro</p>
                    <p className="mt-3 text-4xl font-black text-white">$22 USD</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gold/15 text-gold">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/60">Antes $25</p>
                <a
                  href="https://www.paypal.me/DequanWilliams622/22?note=Gangazo-Oro-ZetaRP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-amber-500 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-amber-600"
                >
                  Comprar Ganga
                </a>
              </article>
            </div>
          </section>

          <section id="plans" className="mt-16 space-y-10">
            <div className="space-y-4 text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-amber-400/80">Elige tu rango VIP</p>
              <h2 className="text-3xl font-black text-white sm:text-4xl">Beneficios vip para todos los jugadores</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {vipPlans.map((plan) => {
                const paypalHref =
                  plan.title === 'BRONCE'
                    ? 'https://www.paypal.me/DequanWilliams622/5?note=VIP-Bronce-ZetaRP'
                    : plan.title === 'PLATA'
                      ? 'https://www.paypal.me/DequanWilliams622/12?note=VIP-Plata-ZetaRP'
                      : 'https://www.paypal.me/DequanWilliams622/25?note=VIP-Oro-ZetaRP'

                return (
                  <article key={plan.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-glow backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-500/40">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-amber-400">{plan.title}</p>
                        <p className="mt-3 text-4xl font-black text-white">{plan.price}</p>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-500/15 text-amber-400">
                        <Shield className="h-6 w-6" />
                      </div>
                    </div>
                    <ul className="mt-8 space-y-3 text-sm text-white/70">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="h-4 w-4 text-amber-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a
                        href="#"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-amber-500/20 bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
                      >
                        <CreditCard className="h-4 w-4" />
                        Pagar con Tarjeta
                      </a>
                      <a
                        href={paypalHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 font-semibold text-white"
                      >
                        PayPal
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        </main>

        <footer className="mt-16 rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-center text-sm text-white/60 shadow-glow backdrop-blur-xl">
          © 2026 ZETA RP. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  )
}

export default App