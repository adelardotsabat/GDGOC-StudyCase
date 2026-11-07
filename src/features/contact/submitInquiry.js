// Belum ada endpoint pengiriman di API yang diberikan, jadi pengiriman disimulasikan.
// Kalau endpoint tersedia, ganti isi fungsi ini dengan fetch POST. Komponen tidak perlu diubah.
export function submitInquiry(_payload) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true }), 800)
  })
}