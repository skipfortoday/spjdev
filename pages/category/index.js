import Layout from "../../src/layout";

const Category = () => {
  return (
    <>
      <div className=" overflow-x-auto max-w-full">
        <div className="card shadow-lg bg-base-100">
          <div className="card-body p-2">
            <div className="form-control flex-1">
              <div className="flex gap-3 w-full">
                <input
                  type="text"
                  placeholder="Nama Category"
                  className="input w-1/3 "
                />
                <input
                  type="text"
                  placeholder="Deskripsi Category"
                  className="input w-1/3 "
                />
                <div className="w-1/3 justify-center text-center">
                  <label
                    for="my-modal-2"
                    className="btn btn-primary modal-button float-right"
                  >
                    Add Category
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
                <td>Perjalanan Dinas</td>
                <td>untuk anggran perjalanan dinas</td>
              </tr>
              <tr className="hover">
                <th>2</th>
                <td>Belanja Barang</td>
                <td>untuk belanja barang / bahan yang tiap bulan beli</td>
              </tr>
              <tr className="hover">
                <th>3</th>
                <td>Belanja Jasa</td>
                <td>untuk membayar jasa service dll</td>
              </tr>
              <tr className="hover">
                <th>4</th>
                <td>Belanja Modal</td>
                <td>untuk belanja mesin / alat yang dipaka terus menerus</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
Category.layout = Layout;
export default Category;
