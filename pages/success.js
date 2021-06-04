import { SuccessMessageContainer, SuccessMessageBox, SuccessMessage, ReturnLink, MessageContainer, LinkContainer, CheckboxContainer } from "../components/SuccessMessage/StyledComponents";
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';


/** Page document displaying a success message after a user has submitted an email */
const Success = () => {
    return (
        <>
            <SuccessMessageContainer>
                <SuccessMessageBox>                
                    <MessageContainer>
                        <SuccessMessage>
                            Success! We will be in contact with you shortly
                        </SuccessMessage>
                    </MessageContainer>
                    <CheckboxContainer>
                        <IoIosCheckmarkCircleOutline style={{ color: 'green', fontSize: '30px' }} />
                    </CheckboxContainer>
                    <LinkContainer>
                        <ReturnLink href="/">
                            Return Home
                        </ReturnLink>                    
                    </LinkContainer>
                </SuccessMessageBox>
            </SuccessMessageContainer>
        </>
    );
}

export default Success;