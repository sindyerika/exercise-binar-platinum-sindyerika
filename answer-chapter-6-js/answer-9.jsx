import React, { useState } from "react";

function Example() {
  // Deklarasi variabel state baru yang kita sebut "count"
  const [count, setCount] = useState(0);
}
//   Di dalam sebuah function component, kita tidak memiliki this, jadi kita tidak bisa menulis atau membaca this.state. Sebagai gantinya, kita dapat memanggil Hook useState secara langsung di dalam komponen kita
//useState adalah cara baru untuk menggunakan kapabilitas yang sama persis dengan this.state berikan di dalam sebuah kelas. Biasanya variabel-variabel “menghilang” ketika sebuah fungsi selesai tetapi variabel state “dipertahankan” oleh React.
