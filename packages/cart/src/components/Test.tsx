import { useRecoilValue } from 'recoil';
import { sampleAtom } from 'shell/atoms';

export default function Test() {
  const value = useRecoilValue(sampleAtom);

  return (
    <div>
      <h1>im from cart</h1>
      <p>{value}</p>
    </div>
  );
}
