import Image from 'next/image';
import {useState} from 'react';
import {playIc, videoBg} from '../assets/images/images';
import Modal from './Modal';

export default function Video({src, title, thumbnail}) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="relative w-[1192px] h-[575px]">
        <Image
          alt=""
          src={thumbnail ?? videoBg}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className="absolute w-[120.55px] h-[120.55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        tabIndex={0}
      >
        <button onClick={() => setIsOpen(true)}>
          <Image alt="" src={playIc} layout="fill" />
        </button>
        <Modal show={isOpen} isOpen={isOpen} setIsOpen={setIsOpen}>
          <iframe
            className="w-full h-full bg-black"
            src={src ?? 'https://www.youtube.com/embed/tgbNymZ7vqY'}
            allowFullScreen
            title={title}
          ></iframe>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute text-white top-8 -right-11"
          >
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
}
