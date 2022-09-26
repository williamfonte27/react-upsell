export function Table() {
  return (
    <div className="px-3 mt-3">
      <table className="table table-striped table-hover text-center">
        <thead className="bg-upsell-primary text-white">
          <tr>
            <th scope="col">24/3/2021</th>
            <th scope="col">Arrivals</th>
            <th scope="col">Sent</th>
            <th scope="col">Bids Received</th>
            <th scope="col">Upgrades</th>
            <th scope="col">Denied</th>
            <th scope="col">Pending (Rooms)</th>
            <th scope="col">Revenue (Rooms)</th>
            <th scope="col">Pending (Extras)</th>
            <th scope="col">Extras Sold</th>
            <th scope="col">Revenue (Extras)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="d-flex justify-content-arround ">
              <label className="container-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              24-Mar
            </th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td style={{ color: "#008000" }}>0</td>
            <td style={{ color: "#F00" }}>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td style={{ color: "#008000" }}>0</td>
            <td>0</td>
          </tr>

          <tr>
            <th className="d-flex justify-content-arround ">
              <label className="container-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              25-Mar
            </th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td style={{ color: "#008000" }}>0</td>
            <td style={{ color: "#F00" }}>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td style={{ color: "#008000" }}>0</td>
            <td>0</td>
          </tr>

          <tr>
            <th className="d-flex justify-content-arround ">
              <label className="container-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              26-Mar
            </th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td style={{ color: "#008000" }}>0</td>
            <td style={{ color: "#F00" }}>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td style={{ color: "#008000" }}>0</td>
            <td>0</td>
          </tr>

          <tr>
            <th className="d-flex justify-content-arround ">
              <label className="container-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              27-Mar
            </th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td style={{ color: "#008000" }}>0</td>
            <td style={{ color: "#F00" }}>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td style={{ color: "#008000" }}>0</td>
            <td>0</td>
          </tr>

          <tr>
            <th className="d-flex justify-content-arround ">
              <label className="container-checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              28-Mar
            </th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td style={{ color: "#008000" }}>0</td>
            <td style={{ color: "#F00" }}>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td style={{ color: "#008000" }}>0</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
