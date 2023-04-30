import styled from "styled-components";

const CartSVG = styled.svg`
	path {
		fill: ${({ currentPath }) =>
			currentPath === "/" || currentPath === "/login"
				? "var(--color-secondary)"
				: "var(--color-primary)"};
	}
`;

export const Cart = ({ currentPath }) => {
	return (
		<CartSVG
			currentPath={currentPath}
			width="32"
			height="29"
			viewBox="0 0 32 29"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M6.20405 20.5975L5.29378 21.0082L5.29378 21.0082L6.20405 20.5975ZM5.74137 13.8297L4.78487 13.5427L4.78487 13.5427L5.74137 13.8297ZM26.2585 13.8297L27.215 13.5427V13.5427L26.2585 13.8297ZM25.7958 20.5975L24.8855 20.1868L24.8855 20.1868L25.7958 20.5975ZM18.7152 25.1848L18.5757 24.1959L18.7152 25.1848ZM13.2846 25.1848L13.1452 26.1736H13.1452L13.2846 25.1848ZM10.7765 9.40736L10.5963 8.42511L10.7765 9.40736ZM21.2234 9.40736L21.0432 10.3896L21.2234 9.40736ZM12.2863 25.044L12.4258 24.0552L12.2863 25.044ZM6.3279 20.872L7.23817 20.4613H7.23817L6.3279 20.872ZM19.7135 25.044L19.853 26.0328H19.853L19.7135 25.044ZM25.6719 20.872L26.5822 21.2827V21.2827L25.6719 20.872ZM26.1564 13.4896L25.1999 13.7766L25.1999 13.7766L26.1564 13.4896ZM5.84342 13.4896L6.79992 13.7766H6.79992L5.84342 13.4896ZM20.2366 9.69781L19.338 9.2621V9.2621L20.2366 9.69781ZM19.054 9.84785C18.8134 10.3441 19.0206 10.9415 19.5169 11.1821C20.0131 11.4228 20.6105 11.2155 20.8512 10.7193L19.054 9.84785ZM11.7632 9.69781L12.6618 9.2621L12.6618 9.2621L11.7632 9.69781ZM11.1487 10.7193C11.3893 11.2155 11.9867 11.4228 12.483 11.1821C12.9792 10.9415 13.1865 10.3441 12.9458 9.84785L11.1487 10.7193ZM14.9905 3.71466L15.1431 4.70156L15.1431 4.70156L14.9905 3.71466ZM15.1471 3.69044L14.9945 2.70354L14.9945 2.70354L15.1471 3.69044ZM16.8527 3.69044L16.7001 4.67733L16.7001 4.67733L16.8527 3.69044ZM17.0093 3.71466L17.162 2.72776L17.162 2.72776L17.0093 3.71466ZM20.567 6.70427L21.5376 6.46897L20.567 6.70427ZM11.4328 6.70427L12.4033 6.93957V6.93957L11.4328 6.70427ZM19.5741 24.0551L18.5757 24.1959L18.8546 26.1736L19.853 26.0328L19.5741 24.0551ZM13.4241 24.1959L12.4258 24.0552L12.1468 26.0328L13.1452 26.1736L13.4241 24.1959ZM25.1999 13.7766L25.302 14.1167L27.215 13.5427L27.1129 13.2026L25.1999 13.7766ZM24.8855 20.1868L24.7616 20.4613L26.5822 21.2827L26.706 21.0082L24.8855 20.1868ZM7.23817 20.4613L7.11432 20.1868L5.29378 21.0082L5.41763 21.2827L7.23817 20.4613ZM6.69788 14.1167L6.79992 13.7766L4.88691 13.2026L4.78487 13.5427L6.69788 14.1167ZM7.11432 20.1868C6.2387 18.2461 6.09526 16.1251 6.69788 14.1167L4.78487 13.5427C4.04221 16.0179 4.22263 18.6341 5.29378 21.0082L7.11432 20.1868ZM25.302 14.1167C25.9046 16.1251 25.7611 18.2461 24.8855 20.1868L26.706 21.0082C27.7772 18.6341 27.9576 16.0179 27.215 13.5427L25.302 14.1167ZM18.5757 24.1959C16.8699 24.4365 15.1299 24.4365 13.4241 24.1959L13.1452 26.1736C15.036 26.4403 16.9638 26.4403 18.8546 26.1736L18.5757 24.1959ZM10.9566 10.3896C14.2816 9.77985 17.7182 9.77985 21.0432 10.3896L21.4035 8.42511C17.8403 7.77167 14.1596 7.77167 10.5963 8.42511L10.9566 10.3896ZM12.4258 24.0552C10.0162 23.7153 8.07249 22.3105 7.23817 20.4613L5.41763 21.2827C6.57324 23.844 9.16045 25.6117 12.1468 26.0328L12.4258 24.0552ZM19.853 26.0328C22.8394 25.6117 25.4266 23.844 26.5822 21.2827L24.7616 20.4613C23.9273 22.3105 21.9836 23.7153 19.5741 24.0551L19.853 26.0328ZM21.0432 10.3896C23.1409 10.7743 24.7064 12.1316 25.1999 13.7766L27.1129 13.2026C26.37 10.7264 24.1151 8.92238 21.4035 8.42511L21.0432 10.3896ZM10.5963 8.42511C7.88471 8.92238 5.62986 10.7264 4.88691 13.2026L6.79992 13.7766C7.29347 12.1316 8.85889 10.7743 10.9566 10.3896L10.5963 8.42511ZM19.338 9.2621L19.054 9.84785L20.8512 10.7193L21.1352 10.1335L19.338 9.2621ZM10.8647 10.1335L11.1487 10.7193L12.9458 9.84785L12.6618 9.2621L10.8647 10.1335ZM15.1431 4.70156L15.2998 4.67733L14.9945 2.70354L14.8378 2.72776L15.1431 4.70156ZM16.7001 4.67733L16.8567 4.70156L17.162 2.72776L17.0054 2.70354L16.7001 4.67733ZM19.5965 6.93957C19.7842 7.71382 19.6974 8.52102 19.338 9.2621L21.1352 10.1335C21.6929 8.98333 21.8366 7.70224 21.5376 6.46897L19.5965 6.93957ZM10.4623 6.46897C10.1633 7.70224 10.3069 8.98333 10.8647 10.1335L12.6618 9.2621C12.3024 8.52102 12.2156 7.71382 12.4033 6.93957L10.4623 6.46897ZM15.2998 4.67733C15.7627 4.60573 16.2372 4.60573 16.7001 4.67733L17.0054 2.70354C16.3401 2.60064 15.6597 2.60064 14.9945 2.70354L15.2998 4.67733ZM21.5376 6.46897C21.0548 4.47762 19.2678 3.05347 17.162 2.72776L16.8567 4.70156C18.3082 4.92607 19.3367 5.86776 19.5965 6.93957L21.5376 6.46897ZM12.4033 6.93957C12.6632 5.86776 13.6916 4.92607 15.1431 4.70156L14.8378 2.72776C12.732 3.05347 10.9451 4.47762 10.4623 6.46897L12.4033 6.93957Z" />
		</CartSVG>
	);
};
