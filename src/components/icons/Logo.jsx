import styled from "styled-components";

const LogoSVG = styled.svg`
	path {
		fill: ${({ currentPath }) =>
			currentPath === "/" || currentPath === "/login"
				? "var(--color-secondary)"
				: "var(--color-primary)"};
	}
`;

export const Logo = ({currentPath}) => {
	return (
		<LogoSVG
			currentPath={currentPath}
			width="99"
			height="57"
			viewBox="0 0 99 57"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.2281 56.8828C5.05783 56.8828 3.99977 56.6874 3.05393 56.2966C2.12413 55.9057 1.38669 55.343 0.841635 54.6083C0.296576 53.8736 0.0160311 53.006 0 52.0055H3.60701C3.6551 52.6777 3.89557 53.2092 4.32841 53.6C4.77728 53.9908 5.38647 54.1862 6.15596 54.1862C6.94149 54.1862 7.55869 54.0064 8.00756 53.6469C8.45643 53.2717 8.68087 52.7871 8.68087 52.1931C8.68087 51.7085 8.52857 51.3099 8.22398 50.9972C7.91939 50.6846 7.53464 50.4423 7.06974 50.2703C6.62087 50.0828 5.99565 49.8795 5.19409 49.6607C4.10397 49.348 3.21425 49.0432 2.52491 48.7462C1.8516 48.4336 1.26646 47.9724 0.769495 47.3628C0.288561 46.7375 0.0480935 45.909 0.0480935 44.8772C0.0480935 43.908 0.296576 43.0639 0.793542 42.3448C1.29051 41.6257 1.98786 41.0786 2.88561 40.7034C3.78335 40.3126 4.80935 40.1172 5.96359 40.1172C7.69495 40.1172 9.09768 40.5315 10.1718 41.36C11.2619 42.1729 11.8631 43.314 11.9753 44.7834H8.27207C8.24001 44.2207 7.99153 43.7595 7.52663 43.4C7.07775 43.0248 6.47659 42.8372 5.72312 42.8372C5.06584 42.8372 4.53682 43.0014 4.13604 43.3297C3.75129 43.6579 3.55892 44.1347 3.55892 44.76C3.55892 45.1977 3.7032 45.5651 3.99176 45.8621C4.29635 46.1434 4.66507 46.3779 5.09791 46.5655C5.54678 46.7375 6.17199 46.9407 6.97355 47.1752C8.06367 47.4878 8.9534 47.8005 9.64274 48.1131C10.3321 48.4257 10.9252 48.8947 11.4222 49.52C11.9192 50.1453 12.1676 50.966 12.1676 51.9821C12.1676 52.8575 11.9352 53.6703 11.4703 54.4207C11.0054 55.171 10.3241 55.7729 9.42632 56.2262C8.52857 56.6639 7.4625 56.8828 6.2281 56.8828Z"

			/>
			<path
				d="M24.5607 56.7186L18.4529 49.4262V56.7186H15.0863V40.3517H18.4529V47.691L24.5607 40.3517H28.6246L21.6992 48.4648L28.817 56.7186H24.5607Z"

			/>
			<path
				d="M44.3773 40.3517L38.7023 51.0207V56.7186H35.3357V51.0207L29.6367 40.3517H33.436L37.043 47.8317L40.626 40.3517H44.3773Z"

			/>
			<path
				d="M59.232 56.7186L57.4044 54.96C55.8494 56.32 53.9497 57 51.7053 57C50.4709 57 49.3808 56.7968 48.435 56.3903C47.5052 55.9683 46.7838 55.3821 46.2708 54.6317C45.7578 53.8657 45.5013 52.9825 45.5013 51.9821C45.5013 50.9034 45.8139 49.9343 46.4391 49.0745C47.0643 48.2147 47.9861 47.5191 49.2045 46.9876C48.7716 46.4717 48.459 45.9793 48.2667 45.5103C48.0743 45.0257 47.9781 44.5099 47.9781 43.9628C47.9781 43.2124 48.1785 42.5402 48.5793 41.9462C48.98 41.3366 49.5492 40.8598 50.2866 40.5159C51.0401 40.172 51.9137 40 52.9077 40C53.9176 40 54.7833 40.1876 55.5047 40.5628C56.2261 40.9379 56.7632 41.4382 57.1159 42.0634C57.4685 42.6887 57.6208 43.3844 57.5728 44.1503H54.3024C54.3184 43.6345 54.1902 43.2437 53.9176 42.9779C53.6451 42.6966 53.2764 42.5559 52.8115 42.5559C52.3626 42.5559 51.9859 42.6887 51.6813 42.9545C51.3927 43.2046 51.2485 43.5329 51.2485 43.9393C51.2485 44.3301 51.3687 44.7209 51.6092 45.1117C51.8496 45.4869 52.2424 45.9559 52.7874 46.5186L57.0197 50.5986C57.0517 50.5674 57.0758 50.5361 57.0918 50.5048C57.1078 50.4736 57.1239 50.4423 57.1399 50.411L58.5106 48.1834H62.0214L60.3381 51.0676C60.0175 51.6772 59.6728 52.2556 59.3041 52.8028L63.368 56.7186H59.232ZM51.8015 54.28C53.1161 54.28 54.2783 53.8267 55.2883 52.92L51.1523 48.9338C49.5973 49.606 48.8197 50.5595 48.8197 51.7945C48.8197 52.4979 49.0923 53.092 49.6373 53.5766C50.1824 54.0455 50.9038 54.28 51.8015 54.28Z"

			/>
			<path
				d="M70.8302 56.8828C69.6599 56.8828 68.6019 56.6874 67.656 56.2966C66.7262 55.9057 65.9888 55.343 65.4437 54.6083C64.8987 53.8736 64.6181 53.006 64.6021 52.0055H68.2091C68.2572 52.6777 68.4977 53.2092 68.9305 53.6C69.3794 53.9908 69.9886 54.1862 70.758 54.1862C71.5436 54.1862 72.1608 54.0064 72.6096 53.6469C73.0585 53.2717 73.283 52.7871 73.283 52.1931C73.283 51.7085 73.1307 51.3099 72.8261 50.9972C72.5215 50.6846 72.1367 50.4423 71.6718 50.2703C71.223 50.0828 70.5977 49.8795 69.7962 49.6607C68.7061 49.348 67.8163 49.0432 67.127 48.7462C66.4537 48.4336 65.8686 47.9724 65.3716 47.3628C64.8907 46.7375 64.6502 45.909 64.6502 44.8772C64.6502 43.908 64.8987 43.0639 65.3956 42.3448C65.8926 41.6257 66.59 41.0786 67.4877 40.7034C68.3854 40.3126 69.4114 40.1172 70.5657 40.1172C72.2971 40.1172 73.6998 40.5315 74.7739 41.36C75.864 42.1729 76.4651 43.314 76.5774 44.7834H72.8742C72.8421 44.2207 72.5936 43.7595 72.1287 43.4C71.6798 43.0248 71.0787 42.8372 70.3252 42.8372C69.6679 42.8372 69.1389 43.0014 68.7381 43.3297C68.3534 43.6579 68.161 44.1347 68.161 44.76C68.161 45.1977 68.3053 45.5651 68.5938 45.8621C68.8984 46.1434 69.2672 46.3779 69.7 46.5655C70.1489 46.7375 70.7741 46.9407 71.5756 47.1752C72.6658 47.4878 73.5555 47.8005 74.2448 48.1131C74.9342 48.4257 75.5273 48.8947 76.0243 49.52C76.5213 50.1453 76.7697 50.966 76.7697 51.9821C76.7697 52.8575 76.5373 53.6703 76.0724 54.4207C75.6075 55.171 74.9262 55.7729 74.0284 56.2262C73.1307 56.6639 72.0646 56.8828 70.8302 56.8828Z"

			/>
			<path
				d="M89.1628 56.7186L83.0549 49.4262V56.7186H79.6884V40.3517H83.0549V47.691L89.1628 40.3517H93.2267L86.3013 48.4648L93.4191 56.7186H89.1628Z"

			/>
			<path
				d="M99 40.3517V56.7186H95.6335V40.3517H99Z"

			/>
			<path
				d="M41.4719 3.63568C41.1644 2.75436 41.7791 1.82963 42.8448 1.57024L43.8096 1.3354C44.8753 1.076 45.9886 1.58017 46.2961 2.46149L56.3181 31.1853C56.6256 32.0666 56.0109 32.9913 54.9452 33.2507L53.9804 33.4856C52.9146 33.7449 51.8014 33.2408 51.4939 32.3595L41.4719 3.63568Z"

			/>
			<path
				d="M55.3697 3.11897C55.7481 2.25371 56.9001 1.80257 57.9427 2.11131L58.8867 2.39083C59.9294 2.69958 60.468 3.65131 60.0896 4.51657L47.7587 32.7171C47.3803 33.5824 46.2284 34.0335 45.1857 33.7248L44.2417 33.4453C43.199 33.1365 42.6605 32.1848 43.0388 31.3195L55.3697 3.11897Z"

			/>
			<path
				d="M42.2616 20.859C42.3832 21.3066 41.1208 21.9289 39.4418 22.249C37.7629 22.569 36.3032 22.4656 36.1815 22.018C36.0599 21.5703 37.3223 20.948 39.0013 20.628C40.6803 20.3079 42.1399 20.4113 42.2616 20.859Z"

			/>
			<path
				d="M33.0355 2.00151C32.9158 1.55352 33.2577 1.10804 33.7993 1.00649C34.3408 0.904937 34.8768 1.18578 34.9966 1.63376L40.8744 23.6281C40.9941 24.0761 40.6521 24.5216 40.1106 24.6231C39.5691 24.7247 39.033 24.4438 38.9133 23.9958L33.0355 2.00151Z"

			/>
			<path
				d="M62.3425 25.0794C62.1919 25.5222 60.7272 25.5733 59.071 25.1936C57.4148 24.814 56.1942 24.1472 56.3448 23.7045C56.4954 23.2617 57.9601 23.2106 59.6163 23.5903C61.2725 23.97 62.4931 24.6367 62.3425 25.0794Z"

			/>
			<path
				d="M65.0901 4.81002C65.2426 4.36771 65.7984 4.10961 66.3317 4.23355C66.8649 4.35749 67.1736 4.81653 67.0211 5.25884L59.5345 26.9748C59.382 27.4171 58.8262 27.6752 58.2929 27.5513C57.7597 27.4273 57.4511 26.9683 57.6035 26.526L65.0901 4.81002Z"

			/>
		</LogoSVG>
	);
};