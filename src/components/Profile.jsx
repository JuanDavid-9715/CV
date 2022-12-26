import "./../assets/styles/profile.scss";

function Profile() {
    return (
        <div className="conteiner-profile filtro">
            <div className="conteiner-name">
                <h1 className="name">
                    Juan David Medellin Calderon
                    <span className="text-decor-1">.</span>
                </h1>
                <h2 className="profession">Programador fullstart</h2>
            </div>
            <div className="conteiner-photo">
                <img className="photo" src="" alt="photo de Juan Medellin" />
            </div>
            <div className="container-profile-text">
                <p className="text-profile"></p>
            </div>
        </div>
    );
}

export default Profile;
