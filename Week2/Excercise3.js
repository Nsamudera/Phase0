var nama = ''
var peran = ''

//if "nama" and "peran" are both blank
if (nama === '' && peran === '') {
  console.log('Nama harus diisi!')
  //if "nama" is filled, but "peran" in blank
} else if (nama !== '' && peran === '') {
  console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!')
  //if "nama" is filled, and "peran" is 'Ksatria'
} else if (nama !== '' && peran === 'Ksatria') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!')
  //if "nama" is filled, and "peran" is 'Tabib'
} else if (nama !== '' && peran === 'Tabib') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.')
  //if "nama" is filled, and "peran" is 'Penyihir'
} else if (nama !== '' && peran === 'Penyihir') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
  //if "nama" is blank, and "peran" is filled
} else if (nama === '' && peran !== '') {
  console.log('Nama harus diisi!')
}
else {
  console.log('Halo ' + nama + ', mohon pilih dari antara tiga peran: Ksatria, Tabib, dan Penyihir.')
}

