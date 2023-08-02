import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.sass";

type LogoProps = {
    className?: string;
    light?: boolean;
    onClick?: () => void;
};

const Logo = ({ className, light, onClick }: LogoProps) => (
    <Link href="/">
        <a
            className={cn(styles.logo, { [styles.light]: light }, className)}
            onClick={onClick}
        >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" fill="#181B1F"/>
<g clip-path="url(#clip0_952_55479)">
<path d="M35.1071 14.0311C33.0047 13.0686 30.7851 12.3857 28.5052 12C28.1933 12.5577 27.911 13.1315 27.6596 13.719C25.231 13.3531 22.7614 13.3531 20.3328 13.719C20.0813 13.1316 19.799 12.5578 19.4872 12C17.2058 12.389 14.9848 13.0735 12.8803 14.0362C8.70219 20.2176 7.56958 26.2455 8.13589 32.1879C10.5827 33.9957 13.3213 35.3705 16.2328 36.2527C16.8884 35.3709 17.4685 34.4356 17.9669 33.4564C17.0202 33.1028 16.1064 32.6665 15.2361 32.1527C15.4651 31.9865 15.6891 31.8154 15.9056 31.6493C18.4378 32.8401 21.2017 33.4576 24 33.4576C26.7983 33.4576 29.5621 32.8401 32.0944 31.6493C32.3133 31.828 32.5373 31.9991 32.7639 32.1527C31.8919 32.6674 30.9764 33.1045 30.028 33.4589C30.5258 34.4376 31.106 35.3722 31.7621 36.2527C34.6761 35.3741 37.4168 33.9999 39.8641 32.1904C40.5285 25.2992 38.7289 19.3266 35.1071 14.0311ZM18.6843 28.5334C17.1062 28.5334 15.8024 27.1013 15.8024 25.3395C15.8024 23.5777 17.0609 22.133 18.6792 22.133C20.2976 22.133 21.5913 23.5777 21.5636 25.3395C21.5359 27.1013 20.2926 28.5334 18.6843 28.5334ZM29.3157 28.5334C27.7351 28.5334 26.4363 27.1013 26.4363 25.3395C26.4363 23.5777 27.6948 22.133 29.3157 22.133C30.9366 22.133 32.2202 23.5777 32.1925 25.3395C32.1648 27.1013 30.924 28.5334 29.3157 28.5334Z" fill="#FCFDFE"/>
</g>
<defs>
<clipPath id="clip0_952_55479">
<rect width="32" height="24.2527" fill="white" transform="translate(8 11.998)"/>
</clipPath>
</defs>
</svg>
        </a>
    </Link>
);

export default Logo;
