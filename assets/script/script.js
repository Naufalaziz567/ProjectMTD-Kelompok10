
function updateLabel() {
    const type = document.getElementById('calcType').value;
    const label = document.getElementById('inputLabel');
    const input = document.getElementById('inputValue');
    const resultContainer = document.getElementById('hasil-container');

    // Sembunyikan hasil lama saat ganti mode
    resultContainer.style.display = 'none';
    input.value = ''; // Kosongkan input

    // Ubah teks label sesuai pilihan
    if (type === 'edges') {
        label.innerText = 'Masukkan Jumlah Simpul (Vertices):';
        input.placeholder = 'Contoh: 5';
    } else if (type === 'maxNodes') {
        label.innerText = 'Masukkan Tinggi/Level Pohon (h):';
        input.placeholder = 'Contoh: 3';
    } else if (type === 'minHeight') {
        label.innerText = 'Masukkan Jumlah Simpul (n):';
        input.placeholder = 'Contoh: 15';
    }
}

// Fungsi Utama Kalkulasi Pohon
function hitungPohon() {
    // Ambil elemen HTML
    const type = document.getElementById('calcType').value;
    const inputVal = document.getElementById('inputValue').value;
    const resultBox = document.getElementById('resultOutput');
    const formulaBox = document.getElementById('formulaOutput');
    const container = document.getElementById('hasil-container');

    // Ubah input menjadi angka integer
    const value = parseInt(inputVal);

    // Validasi: Pastikan input adalah angka dan tidak negatif
    if (isNaN(value) || value < 0) {
        alert("Mohon masukkan angka yang valid (tidak boleh kosong atau negatif).");
        return;
    }

    let result = 0;
    let formulaText = "";

    // Logika Matematika Diskrit
    if (type === 'edges') {
        // Rumus: E = V - 1
        if(value === 0) {
            result = 0;
            formulaText = "Tidak ada simpul = Tidak ada sisi.";
        } else {
            result = value - 1;
            formulaText = `Rumus: E = V - 1 (Dimana V = ${value})`;
        }
        resultBox.innerHTML = `Jumlah Sisi (Edges): ${result}`;

    } else if (type === 'maxNodes') {
        // Rumus: N = 2^(h+1) - 1
        // Math.pow(basis, pangkat)
        result = Math.pow(2, value + 1) - 1;
        formulaText = `Rumus Max Node: 2^(h+1) - 1`;
        resultBox.innerHTML = `Maksimal Simpul: ${result}`;

    } else if (type === 'minHeight') {
        // Rumus: h = ceil(log2(n+1)) - 1
        if (value === 0) {
            result = 0;
        } else {
            // Math.log2 mencari logaritma basis 2
            // Math.ceil membulatkan ke atas
            result = Math.ceil(Math.log2(value + 1)) - 1;
        }
        formulaText = `Rumus Tinggi Min: ceil(log2(n+1)) - 1`;
        resultBox.innerHTML = `Tinggi Minimum: ${result}`;
    }

    // Tampilkan detail rumus
    formulaBox.innerHTML = formulaText;
    
    // Munculkan kotak hasil (ubah display dari none ke block)
    container.style.display = 'block';
}

    // fungsi untuk kalkulator MST
    




// Fungsi untuk page evaluation
function showAns1() {
    var answer = document.getElementById('answer1');
    
    answer.style.display = 'block';
}

function hideAns1() {
    var answer = document.getElementById('answer1');

    answer.style.display = 'none';
}

function showAns2() {
    var answer = document.getElementById('answer2');
    
    answer.style.display = 'block';
}

function hideAns2() {
    var answer = document.getElementById('answer2');

    answer.style.display = 'none';
}

function showAns3() {
    var answer = document.getElementById('answer3');
    
    answer.style.display = 'block';
}

function hideAns3() {
    var answer = document.getElementById('answer3');

    answer.style.display = 'none';
}

function showAns4() {
    var answer = document.getElementById('answer4');
    
    answer.style.display = 'block';
}

function hideAns4() {
    var answer = document.getElementById('answer4');

    answer.style.display = 'none';
}

function showAns5() {
    var answer = document.getElementById('answer5');
    
    answer.style.display = 'block';
}

function hideAns5() {
    var answer = document.getElementById('answer5');

    answer.style.display = 'none';
}

function showAns6() {
    var answer = document.getElementById('answer6');
    
    answer.style.display = 'block';
}

function hideAns6() {
    var answer = document.getElementById('answer6');

    answer.style.display = 'none';
}

function showAns7() {
    const input = document.getElementById('eva7').value;
    var answer = document.getElementById('answer7');
    var outputEva7 = document.getElementById('outputEva7');
    var outputEva72 = document.getElementById('outputEva72');
    var result7 = document.getElementById('resultEva7');
    
    answer.style.display = 'block';
    const inVal = parseInt(input);
    let result = 0;
    if (inVal === '' || isNaN(inVal)) {
        outputEva7.innerHTML = `20`;
        outputEva72.innerHTML = `20`;
        result7.innerHTML = `19`;
    } else {
        result = inVal - 1;
        outputEva7.innerHTML = `${inVal}`;
        outputEva72.innerHTML = `${inVal}`;
        result7.innerHTML = `${result}`;
    }
}

function hideAns7() {
    var answer = document.getElementById('answer7');

    answer.style.display = 'none';
}

function showAns8() {
    var answer = document.getElementById('answer8');
    
    answer.style.display = 'block';
}

function hideAns8() {
    var answer = document.getElementById('answer8');

    answer.style.display = 'none';
}

function showAns9() {
    var answer = document.getElementById('answer9');
    
    answer.style.display = 'block';
}

function hideAns9() {
    var answer = document.getElementById('answer9');

    answer.style.display = 'none';
}

function showAns10() {
    var answer = document.getElementById('answer10');
    
    answer.style.display = 'block';
}

function hideAns10() {
    var answer = document.getElementById('answer10');

    answer.style.display = 'none';
}

// Variabel global
        let graphData = {
            nodes: [],
            edges: [],
            nodeCount: 6
        };
        
        let currentInputMethod = 'edge';
        
        // ==================== FUNGSI UTAMA ====================
        
        // Inisialisasi aplikasi
        function initApp() {
            setupEventListeners();
        }
        
        // Setup semua event listener
        function setupEventListeners() {
            
            // Tombol hitung MST
            document.getElementById('calculateBtn').addEventListener('click', calculateMST);
        }
        
        // ==================== PARSING DATA ====================
        
        // Parse data metode input
        function parseGraphData() {
            const usePrim = document.getElementById('algorithmPrim').checked;
            const useKruskal = document.getElementById('algorithmKruskal').checked;
            
            if (!usePrim && !useKruskal) {
                alert('Pilih setidaknya satu algoritma!');
                return null;
            }
            
            let nodes = [];
            let edges = [];
            
            if (currentInputMethod === 'edge') {
                const result = parseEdgeListInput();
                nodes = result.nodes;
                edges = result.edges;
            }

            return { nodes, edges };
            
            function parseEdgeListInput() {
                const nodeCount = parseInt(document.getElementById('nodeCountEdge').value);
                const edgeText = document.getElementById('edgeList').value;
                const edgeLines = edgeText.trim().split('\n');
                
                graphData.nodeCount = nodeCount;
                
                // Kumpulkan nodes unik
                const nodeSet = new Set();
                
                edgeLines.forEach(line => {
                    const parts = line.trim().split(/\s+/);
                    if (parts.length >= 3) {
                        const from = parts[0].toUpperCase();
                        const to = parts[1].toUpperCase();
                        const weight = parseInt(parts[2]);
                        
                        nodeSet.add(from);
                        nodeSet.add(to);
                        
                        if (!isNaN(weight)) {
                            nodeSet.add(from);
                            nodeSet.add(to);
                            edges.push({ from, to, weight });
                        }
                    }
                });
                
                nodes = Array.from(nodeSet);
                
                // Jika nodeCount lebih besar, tambahkan node tambahan
                while (nodes.length < nodeCount) {
                    nodes.push(String.fromCharCode(65 + nodes.length));
                }

                return { nodes, edges };
            }
        }
        
        // ==================== ALGORITMA MST ====================
        
        // Algoritma Prim
        function primAlgorithm(nodes, edges) {
            if (edges.length === 0) return { mstEdges: [], totalWeight: 0 };
            
            // Buat adjacency list
            const adjList = {};
            nodes.forEach(node => adjList[node] = []);
            
            edges.forEach(edge => {
                adjList[edge.from].push({ node: edge.to, weight: edge.weight });
                adjList[edge.to].push({ node: edge.from, weight: edge.weight });
            });
            
            const visited = new Set();
            const mstEdges = [];
            let totalWeight = 0;
            
            // Mulai dari node pertama
            visited.add(nodes[0]);
            
            // Ulangi sampai semua node dikunjungi
            while (visited.size < nodes.length) {
                let minEdge = null;
                
                // Cari edge terkecil dari visited ke unvisited
                visited.forEach(node => {
                    adjList[node].forEach(neighbor => {
                        if (!visited.has(neighbor.node)) {
                            if (minEdge === null || neighbor.weight < minEdge.weight) {
                                minEdge = {
                                    from: node,
                                    to: neighbor.node,
                                    weight: neighbor.weight
                                };
                            }
                        }
                    });
                });
                
                if (minEdge) {
                    visited.add(minEdge.to);
                    mstEdges.push(minEdge);
                    totalWeight += minEdge.weight;
                } else {
                    // Graf tidak terhubung
                    break;
                }
            }
            
            return { mstEdges, totalWeight };
        }
        
        // Algoritma Kruskal
        function kruskalAlgorithm(nodes, edges) {
            if (edges.length === 0) return { mstEdges: [], totalWeight: 0 };
            
            // Sort edges berdasarkan weight
            const sortedEdges = [...edges].sort((a, b) => a.weight - b.weight);
            
            // Union-Find structure
            const parent = {};
            const rank = {};
            
            nodes.forEach(node => {
                parent[node] = node;
                rank[node] = 0;
            });
            
            function find(node) {
                if (parent[node] !== node) {
                    parent[node] = find(parent[node]);
                }
                return parent[node];
            }
            
            function union(node1, node2) {
                const root1 = find(node1);
                const root2 = find(node2);
                
                if (root1 !== root2) {
                    if (rank[root1] > rank[root2]) {
                        parent[root2] = root1;
                    } else if (rank[root1] < rank[root2]) {
                        parent[root1] = root2;
                    } else {
                        parent[root2] = root1;
                        rank[root1]++;
                    }
                    return true;
                }
                return false;
            }
            
            const mstEdges = [];
            let totalWeight = 0;
            
            for (const edge of sortedEdges) {
                if (union(edge.from, edge.to)) {
                    mstEdges.push(edge);
                    totalWeight += edge.weight;
                    
                    if (mstEdges.length === nodes.length - 1) {
                        break;
                    }
                }
            }
            
            return { mstEdges, totalWeight };
        }
        
        // ==================== TAMPILAN HASIL ====================
        
        // Hitung MST dan tampilkan hasil
        function calculateMST() {
            const graph = parseGraphData();
            if (!graph) return;
            
            const { nodes, edges } = graph;
            
            if (edges.length === 0) {
                showError('Graf tidak memiliki edge!');
                return;
            }
            
            const usePrim = document.getElementById('algorithmPrim').checked;
            const useKruskal = document.getElementById('algorithmKruskal').checked;
            
            let primResult = null;
            let kruskalResult = null;
            
            if (usePrim) {
                primResult = primAlgorithm(nodes, edges);
            }
            
            if (useKruskal) {
                kruskalResult = kruskalAlgorithm(nodes, edges);
            }
            
            displayResults(primResult, kruskalResult, nodes, edges);
        }
        
        // Tampilkan hasil
        function displayResults(primResult, kruskalResult, nodes, edges) {
            const resultContainer = document.getElementById('resultContainer');
            const comparisonResult = document.getElementById('comparisonResult');
            
            resultContainer.innerHTML = `
                <div class="result-container">
                    <h3>Informasi Graf</h3>
                    <p><strong>Jumlah Node:</strong> ${nodes.length}</p>
                    <p><strong>Jumlah Edge:</strong> ${edges.length}</p>
                    <p><strong>Graf Terhubung:</strong> ${isGraphConnected(nodes, edges) ? 'Ya' : 'Tidak'}</p>
                </div>
            `;
            
            comparisonResult.style.display = 'block';
            
            // Tampilkan hasil Prim
            if (primResult) {
                const primResultDiv = document.getElementById('primResult');
                const primEdgesDiv = document.getElementById('primEdges');
                const primTotalDiv = document.getElementById('primTotal');
                
                primEdgesDiv.innerHTML = '';
                primResult.mstEdges.forEach(edge => {
                    const edgeElem = document.createElement('div');
                    edgeElem.className = 'mst-edge';
                    edgeElem.textContent = `${edge.from}-${edge.to} (${edge.weight})`;
                    primEdgesDiv.appendChild(edgeElem);
                });
                
                primTotalDiv.innerHTML = `Total Bobot: <strong>${primResult.totalWeight}</strong>`;
                
                if (primResult.mstEdges.length < nodes.length - 1) {
                    primResultDiv.innerHTML += `<p style="color: #f80e21ff; margin-top: 10px;"> Graf tidak terhubung sempurna</p>`;
                }
            } else {
                document.getElementById('primResult').style.display = 'none';
            }
            
            // Tampilkan hasil Kruskal
            if (kruskalResult) {
                const kruskalResultDiv = document.getElementById('kruskalResult');
                const kruskalEdgesDiv = document.getElementById('kruskalEdges');
                const kruskalTotalDiv = document.getElementById('kruskalTotal');
                
                kruskalEdgesDiv.innerHTML = '';
                kruskalResult.mstEdges.forEach(edge => {
                    const edgeElem = document.createElement('div');
                    edgeElem.className = 'mst-edge';
                    edgeElem.textContent = `${edge.from}-${edge.to} (${edge.weight})`;
                    kruskalEdgesDiv.appendChild(edgeElem);
                });
                
                kruskalTotalDiv.innerHTML = `Total Bobot: <strong>${kruskalResult.totalWeight}</strong>`;
                
                if (kruskalResult.mstEdges.length < nodes.length - 1) {
                    kruskalResultDiv.innerHTML += `<p style="color: #f80e21ff; margin-top: 10px;"> Graf tidak terhubung sempurna</p>`;
                }
            } else {
                document.getElementById('kruskalResult').style.display = 'none';
            }
            
            // Tampilkan perbandingan jika kedua algoritma digunakan
            if (primResult && kruskalResult) {
                if (primResult.totalWeight === kruskalResult.totalWeight) {
                    resultContainer.innerHTML += `
                        <div style="margin-top: 20px; padding: 15px; background-color: #007BFF; border-radius: 8px;">
                            <h4> Hasil Sama</h4>
                            <p>Kedua algoritma menghasilkan MST dengan total bobot yang sama: <strong>${primResult.totalWeight}</strong></p>
                        </div>
                    `;
                } else {
                    resultContainer.innerHTML += `
                        <div style="margin-top: 20px; padding: 15px; background-color: #3393faff; border-radius: 8px;">
                            <h4> Perbedaan Hasil</h4>
                            <p>Algoritma menghasilkan MST berbeda. Ini mungkin karena graf memiliki beberapa MST dengan bobot sama.</p>
                        </div>
                    `;
                }
            }
        }
        
        // ==================== FUNGSI BANTU ====================
        
        // Cek konektivitas graf
        function isGraphConnected(nodes, edges) {
            if (nodes.length === 0) return false;
            
            const adjList = {};
            nodes.forEach(node => adjList[node] = []);
            
            edges.forEach(edge => {
                adjList[edge.from].push(edge.to);
                adjList[edge.to].push(edge.from);
            });
            
            const visited = new Set();
            const stack = [nodes[0]];
            
            while (stack.length > 0) {
                const node = stack.pop();
                if (!visited.has(node)) {
                    visited.add(node);
                    adjList[node].forEach(neighbor => {
                        if (!visited.has(neighbor)) {
                            stack.push(neighbor);
                        }
                    });
                }
            }
            
            return visited.size === nodes.length;
        }
        
        // Tampilkan error
        function showError(message) {
            const resultContainer = document.getElementById('resultContainer');
            resultContainer.innerHTML = `
                <div style="padding: 20px; background-color: #007BFF; border-radius: 10px;">
                    <h3 style="color: #f80e21ff;"> Error</h3>
                    <p>${message}</p>
                </div>
            `;
            document.getElementById('comparisonResult').style.display = 'none';
        }
        
        // Isi matriks dengan data
        function fillMatrix(matrix) {
            const nodeCount = matrix.length;
            for (let i = 0; i < nodeCount; i++) {
                for (let j = 0; j < nodeCount; j++) {
                    if (i !== j) {
                        const cell = document.querySelector(`.matrix-cell[data-row="${i}"][data-col="${j}"]`);
                        if (cell) {
                            cell.value = matrix[i][j];
                        }
                    }
                }
            }
        }
        
        // Inisialisasi saat halaman dimuat
        document.addEventListener('DOMContentLoaded', initApp);