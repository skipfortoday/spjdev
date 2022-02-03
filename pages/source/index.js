import Layout from "../../src/layout";

const Source = () => {
  return (
    <>
      <div className=" overflow-x-auto max-w-full">
        <div className="card shadow-lg bg-base-100">
          <div className="card-body p-2">
            <div className="form-control flex-1">
              <div className="flex gap-3 w-full">
                <input
                  type="text"
                  placeholder="Nama Sumber Dana"
                  className="input w-1/3 "
                />
                <input
                  type="text"
                  placeholder="Deskripsi"
                  className="input w-1/3 "
                />
                <div className="w-1/3 justify-center text-center">
                  <label
                    for="my-modal-2"
                    className="btn btn-primary modal-button float-right"
                  >
                    Add Item
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto overflow-y-auto mt-3 max-h-100 min-w-80 rounded-xl">
          <table className="table w-full ">
            <thead>
              <tr>
                <th>#</th>
                <th>Nama</th>
                <th>Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover">
                <th>1</th>
                <td>APBD</td>
                <td>Sumberdana anggaran belanja daerah</td>
              </tr>
              <tr className="hover">
                <th>2</th>
                <td>BOK</td>
                <td>sumber dana bok </td>
              </tr>
              <tr className="hover">
                <th>3</th>
                <td>KAPITASI</td>
                <td>sumber dana dari kapitasi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
Source.layout = Layout;
export default Source;
