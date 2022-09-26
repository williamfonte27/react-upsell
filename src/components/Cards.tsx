export function Cards() {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 px-4">
      <div className="col">
        <div className="card">
          <div className="card-header bg-upsell-primary card-header-upsell">
            Pending Upgrades
          </div>
          <div className="card-body-upsell">
            <div className="d-flex justify-content-around align-items-center">
              <div className="mini-card d-flex flex-column align-items-center">
                <h5 className="card-title-upsell"><a href="#" className="link-upsell-secondary">VIEW ALL</a></h5>
                <p className="card-text-upsell">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <div className="card-header bg-upsell-primary card-header-upsell">
            Revenue
          </div>
          <div className="card-body-upsell">
            <div className="d-flex justify-content-around align-items-center">
              <div className="mini-card d-flex flex-column align-items-center">
                <h5 className="card-title-upsell">THIS MONTH</h5>
                <p className="card-text-upsell">3105</p>
              </div>
              <div className="mini-card d-flex flex-column align-items-center">
                <h5 className="card-title-upsell">LAST MONTH</h5>
                <p className="card-text-upsell">2938</p>
              </div>
              <div className="mini-card d-flex flex-column align-items-center">
                <h5 className="card-title-upsell">THIS YEAR</h5>
                <p className="card-text-upsell">7711</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <div className="card-header bg-upsell-primary card-header-upsell">
            Room Upgrades
          </div>
          <div className="card-body-upsell">
            <div className="d-flex justify-content-around align-items-center">
              <div className="mini-card d-flex flex-column align-items-center">
                <h5 className="card-title-upsell">THIS MONTH</h5>
                <p className="card-text-upsell">22</p>
              </div>
              <div className="mini-card d-flex flex-column align-items-center">
                <h5 className="card-title-upsell">LAST MONTH</h5>
                <p className="card-text-upsell">13</p>
              </div>
              <div className="mini-card d-flex flex-column align-items-center">
                <h5 className="card-title-upsell">THIS YEAR</h5>
                <p className="card-text-upsell">44</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <div className="card-header bg-upsell-primary card-header-upsell">
            Booked Extras
          </div>
          <div className="card-body-upsell">
            <div className="d-flex justify-content-around align-items-center">
              <div className="mini-card d-flex flex-column align-items-center">
                <h5 className="card-title-upsell">THIS MONTH</h5>
                <p className="card-text-upsell">41</p>
              </div>
              <div className="mini-card d-flex flex-column align-items-center">
                <h5 className="card-title-upsell">LAST MONTH</h5>
                <p className="card-text-upsell">73</p>
              </div>
              <div className="mini-card d-flex flex-column align-items-center">
                <h5 className="card-title-upsell">THIS YEAR</h5>
                <p className="card-text-upsell">150</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
