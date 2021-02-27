const ProfileSmall = (seller: any) => (
  <div className="profileSmall">
    <img src={seller.image}></img>
    <div className="info">
      <h3>{seller.name}</h3>
    </div>
  </div>
)

export default ProfileSmall
