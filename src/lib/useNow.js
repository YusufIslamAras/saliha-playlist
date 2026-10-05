import { useEffect, useState } from 'react';

// Her saniye güncellenen şimdiki zaman (ilk render'da null)
export function useNow() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    const first = setTimeout(tick, 0);
    const timer = setInterval(tick, 1000);
    return () => {
      clearTimeout(first);
      clearInterval(timer);
    };
  }, []);

  return now;
}
