import { UserInfosContainer } from "./UserInfosStyled";

interface IUserInfosProps {
    name: string | null;
    email: string | null;
}

export const UserInfos = ({name, email}: IUserInfosProps) => (
    <UserInfosContainer>
        <span className="title__userInfo">Name - {name}</span>
        <span className="title__userInfo">E-mail - {email}</span>
    </UserInfosContainer>
)