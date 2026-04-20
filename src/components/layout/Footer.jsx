import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-24">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-indigo-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">Q</span>
              </div>
              <span className="text-white font-semibold text-sm">QUAS Lab</span>
            </div>
            <p className="text-xs leading-relaxed">
              Quality, Understanding, Assurance & Software Lab<br />
              홍익대학교 소프트웨어융합학과
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'PI (About)', to: '/pi' },
                { label: 'Research', to: '/research' },
                { label: 'Archive', to: '/archive' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-slate-500 text-xs">Email</span><br />
                <a href="mailto:janghwan@hongik.ac.kr" className="hover:text-white transition-colors">
                  janghwan@hongik.ac.kr
                </a>
              </li>
              <li>
                <span className="text-slate-500 text-xs">Address</span><br />
                서울특별시 마포구 와우산로 94<br />
                홍익대학교
              </li>
              <li>
                <span className="text-slate-500 text-xs">Website</span><br />
                <a href="https://quaslab.com" className="hover:text-white transition-colors">
                  quaslab.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {new Date().getFullYear()} QUAS Lab, Hongik University. All rights reserved.</p>
          <p>Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
