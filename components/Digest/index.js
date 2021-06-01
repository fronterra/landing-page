import { DigestContainer, DigestContent, DigestH1 } from "./DigestElements"

const Digest = ({ title }) => {
    return (
        <>
            <DigestContainer>
                <DigestContent>
                    <DigestH1>
                        {title}
                    </DigestH1>
                </DigestContent>
            </DigestContainer>
        </>
    );
}

export default Digest;