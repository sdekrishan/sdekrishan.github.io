import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';
const SocilaMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://linkedin.com/in/sdekrishan"
          target={'_blank'}
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>

      <div>
        <a
          href="https://github.com/sdekrishan"
          target={'_blank'}
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/sdekrishan"
          target={'_blank'}
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocilaMedia;
