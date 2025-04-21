import React from 'react'

function History() {
  return (
    <>
        <div className="p-6">
            <h2 className="text-xl font-bold">History</h2>
            <div className="bg-white w-full md:max-w-6xl rounded-lg shadow-lg ml-5">
                <table>
                    <thead>
                        <tr>
                            <th className="border p-2">No</th>
                            <th className="border p-2">Nama</th>
                            <th className="border p-2">Harga</th>
                            <th className="border p-2">Jumlah</th>
                            <th className="border p-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2">1</td>
                            <td className="border p-2">Baju Anak</td>
                            <td className="border p-2">Rp. 50.000</td>
                            <td className="border p-2">2</td>
                            <td className="border p-2">Rp. 100.000</td>
                        </tr>
                        <tr>
                            <td className="border p-2">2</td>
                            <td className="border p-2">Celana Anak</td>
                            <td className="border p-2">Rp. 70.000</td>
                            <td className="border p-2">1</td>
                            <td className="border p-2">Rp. 70.000</td>
                        </tr>
                        <tr>
                            <td className="border p-2">3</td>
                            <td className="border p-2">Topi Anak</td>
                            <td className="border p-2">Rp. 20.000</td>
                            <td className="border p-2">3</td>
                            <td className="border p-2">Rp. 60.000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </>
  )
}

export default History