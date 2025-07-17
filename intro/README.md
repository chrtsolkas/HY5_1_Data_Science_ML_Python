# Οδηγός Εγκατάστασης Python, Jupyter Notebook & Εικονικού Περιβάλλοντος

Αυτός ο οδηγός θα σας βοηθήσει να εγκαταστήσετε την Python, το Jupyter Notebook, και να δημιουργήσετε ένα εικονικό περιβάλλον με βασικά πακέτα για επιστήμη δεδομένων και ανάλυση.

## Πίνακας Περιεχομένων

- [Προαπαιτούμενα](#προαπαιτούμενα)
- [Βήμα 1: Εγκατάσταση Python](#βήμα-1-εγκατάσταση-python)
- [Βήμα 2: Επιβεβαίωση Εγκατάστασης Python](#βήμα-2-επιβεβαίωση-εγκατάστασης-python)
- [Scripts Αυτόματης Εγκατάστασης](#scripts-αυτόματης-εγκατάστασης)
- [Βήμα 3: Εγκατάσταση Jupyter Notebook](#βήμα-3-εγκατάσταση-jupyter-notebook)
- [Βήμα 4: Δημιουργία Εικονικού Περιβάλλοντος](#βήμα-4-δημιουργία-εικονικού-περιβάλλοντος)
- [Βήμα 5: Εγκατάσταση Πακέτων Python](#βήμα-5-εγκατάσταση-πακέτων-python)
- [Βήμα 6: Καταχώρηση Εικονικού Περιβάλλοντος ως Jupyter Kernel](#βήμα-6-καταχώρηση-εικονικού-περιβάλλοντος-ως-jupyter-kernel)
- [Βήμα 7: Εκκίνηση Jupyter Notebook](#βήμα-7-εκκίνηση-jupyter-notebook)
- [Αντιμετώπιση Προβλημάτων](#αντιμετώπιση-προβλημάτων)

## Προαπαιτούμενα

Πριν ξεκινήσετε, βεβαιωθείτε ότι έχετε δικαιώματα διαχειριστή/root στο σύστημά σας για την εγκατάσταση λογισμικού.

## Βήμα 1: Εγκατάσταση Python

### Windows

1. **Κατέβασμα Python:**
   - Επισκεφτείτε το [python.org](https://www.python.org/downloads/)
   - Κατεβάστε την τελευταία έκδοση Python 3.x (συνιστάται 3.9 ή νεότερη)

2. **Εγκατάσταση Python:**
   - Εκτελέστε το κατεβασμένο αρχείο εγκατάστασης
   - **ΣΗΜΑΝΤΙΚΟ**: Επιλέξτε "Add Python to PATH" κατά την εγκατάσταση
   - Επιλέξτε "Install Now" για τις προεπιλεγμένες ρυθμίσεις
   - Εάν σας ζητηθεί, επιτρέψτε στον installer να απενεργοποιήσει το όριο μήκους διαδρομής

### macOS

**Επιλογή Α: Χρήση Επίσημου Installer**
1. Επισκεφτείτε το [python.org](https://www.python.org/downloads/)
2. Κατεβάστε την τελευταία έκδοση Python 3.x
3. Εκτελέστε τον installer και ακολουθήστε τις οδηγίες

**Επιλογή Β: Χρήση Homebrew (Συνιστάται)**
1. Εγκαταστήστε το Homebrew αν δεν είναι ήδη εγκατεστημένο:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. Εγκαταστήστε την Python:
   ```bash
   brew install python
   ```

### Linux (Ubuntu/Debian)

1. **Ενημέρωση λίστας πακέτων:**
   ```bash
   sudo apt update
   ```

2. **Εγκατάσταση Python και pip:**
   ```bash
   sudo apt install python3 python3-pip python3-venv
   ```

### Linux (CentOS/RHEL/Fedora)

1. **Για CentOS/RHEL:**
   ```bash
   sudo yum install python3 python3-pip
   ```

2. **Για Fedora:**
   ```bash
   sudo dnf install python3 python3-pip
   ```

## Βήμα 2: Επιβεβαίωση Εγκατάστασης Python

Ανοίξτε το terminal/command prompt και εκτελέστε:

```bash
python --version
```

Ή αν το παραπάνω δεν λειτουργεί:

```bash
python3 --version
```

Θα πρέπει να δείτε κάτι σαν: `Python 3.x.x`

Επίσης επιβεβαιώστε ότι το pip είναι εγκατεστημένο:

```bash
pip --version
```

Ή:

```bash
pip3 --version
```

## Βήμα 3: Εγκατάσταση Jupyter Notebook

Εγκαταστήστε το Jupyter Notebook καθολικά χρησιμοποιώντας pip:

### Windows
```cmd
pip install jupyter
```

### macOS/Linux
```bash
pip3 install jupyter
```

Εάν αντιμετωπίσετε προβλήματα δικαιωμάτων σε macOS/Linux, χρησιμοποιήστε:
```bash
pip3 install --user jupyter
```

## Βήμα 4: Δημιουργία Εικονικού Περιβάλλοντος

**Μεταβείτε στον επιθυμητό κατάλογο (θα συμβολίζεται ως CWD στον οδηγό)** του έργου σας και δημιουργήστε ένα εικονικό περιβάλλον:

### Windows
```cmd
# Δημιουργία εικονικού περιβάλλοντος
python -m venv data_science_env

# Ενεργοποίηση εικονικού περιβάλλοντος
data_science_env\Scripts\activate
```

### macOS/Linux
```bash
# Δημιουργία εικονικού περιβάλλοντος
python3 -m venv data_science_env

# Ενεργοποίηση εικονικού περιβάλλοντος
source data_science_env/bin/activate
```

Θα πρέπει να δείτε `(data_science_env)` στην αρχή της γραμμής εντολών, υποδεικνύοντας ότι το εικονικό περιβάλλον είναι ενεργό.

## Βήμα 5: Εγκατάσταση Πακέτων Python

Με το εικονικό περιβάλλον ενεργοποιημένο, εγκαταστήστε τα απαραίτητα πακέτα:

```bash
# Αναβάθμιση pip πρώτα
pip install --upgrade pip

# Εγκατάσταση βασικών πακέτων επιστήμης δεδομένων
pip install numpy pandas matplotlib seaborn plotly plotnine scipy scikit-learn

# Εγκατάσταση πακέτων για Jupyter
pip install ipywidgets anywidget nbformat

# Εγκατάσταση Jupyter στο εικονικό περιβάλλον
pip install jupyter ipykernel

# Εγκατάσταση πακέτων για δέντρα αποφάσεων
pip install xgboost lightgbm setuptools yellowbrick graphviz
```

## Βήμα 6: Καταχώρηση Εικονικού Περιβάλλοντος ως Jupyter Kernel

Αυτό το βήμα επιτρέπει στο Jupyter να χρησιμοποιεί το εικονικό περιβάλλον σας:

```bash
# Βεβαιωθείτε ότι το εικονικό περιβάλλον είναι ενεργοποιημένο
python -m ipykernel install --user --name=data_science_env --display-name="Python (Data Science)"
```

## Βήμα 7: Εκκίνηση Jupyter Notebook

### Από το Εικονικό Περιβάλλον
Με το εικονικό περιβάλλον ενεργοποιημένο:

```bash
jupyter notebook
```

### Από Οπουδήποτε
Εάν εγκαταστήσατε το Jupyter καθολικά, μπορείτε να το εκκινήσετε από οπουδήποτε:

```bash
jupyter notebook
```

Το Jupyter θα ανοίξει στον προεπιλεγμένο browser σας. Όταν δημιουργείτε νέο notebook, επιλέξτε "Python (Data Science)" από το dropdown kernel για να χρησιμοποιήσετε το εικονικό περιβάλλον σας.



## Διαχείριση Περιβάλλοντος

### Απενεργοποίηση Εικονικού Περιβάλλοντος
Όταν τελειώσετε την εργασία σας μπορείτε να απενεργοποιήσετε το εικονικό περιβάλλον (στο CWD δίνετε την ακόλουθη εντολή):

```bash
deactivate
```

### Επανενεργοποίηση Εικονικού Περιβάλλοντος
Για συνέχιση εργασίας αργότερα (στο CWD δίνετε την ακόλουθη εντολή):

**Windows:**
```cmd
data_science_env\Scripts\activate
```

**macOS/Linux:**
```bash
source data_science_env/bin/activate
```

### Λίστα Διαθέσιμων Kernels
Για να δείτε όλα τα διαθέσιμα Jupyter kernels:

```bash
jupyter kernelspec list
```

### Αφαίρεση Kernel
Για αφαίρεση kernel που δεν χρειάζεστε πλέον (προσοχή μην εκτελέσετε τις ακόλουθες εντολές αν δεν έχετε παραδώσει την εργασία του μαθήματος):

```bash
jupyter kernelspec uninstall data_science_env
```

## Αντιμετώπιση Προβλημάτων

### Συνήθη Προβλήματα και Λύσεις

**1. "python is not recognized" (Windows)**
- Η Python δεν προστέθηκε στο PATH κατά την εγκατάσταση
- Λύση: Επανεγκαταστήστε την Python και επιλέξτε "Add Python to PATH"

**2. Σφάλματα δικαιωμάτων (macOS/Linux)**
- Χρησιμοποιήστε `pip3 install --user package_name` αντί για `pip3 install package_name`

**3. Το εικονικό περιβάλλον δεν φαίνεται στο Jupyter**
- Βεβαιωθείτε ότι εκτελέσατε: `python -m ipykernel install --user --name=data_science_env --display-name="Python (Data Science)"`
- Επανεκκινήστε το Jupyter Notebook μετά την καταχώρηση του kernel

**4. "ModuleNotFoundError" στο Jupyter**
- Βεβαιωθείτε ότι χρησιμοποιείτε το σωστό kernel (Python (Data Science))
- Επιβεβαιώστε ότι τα πακέτα είναι εγκατεστημένα στο εικονικό περιβάλλον

**5. Το Jupyter δεν εκκινεί**
- Ελέγξτε αν εκτελείται άλλη εφαρμογή
- Δοκιμάστε: `jupyter notebook --port=8889` για χρήση διαφορετικής πόρτας

### Συμβουλές Διαχείρισης Πακέτων

**Αποθήκευση του περιβάλλοντος:**
```bash
pip freeze > requirements.txt
```

**Αναδημιουργία περιβάλλοντος από requirements:**
```bash
pip install -r requirements.txt
```

**Ενημέρωση όλων των πακέτων:**
```bash
pip list --outdated
pip install --upgrade package_name
```

## Επόμενα Βήματα

1. Δημιουργήστε νέο Jupyter notebook
2. Επιλέξτε "Python (Data Science)" ως kernel
3. Ξεκινήστε προγραμματισμό με τα εγκατεστημένα πακέτα
4. Θυμηθείτε να ενεργοποιείτε το εικονικό περιβάλλον όταν εργάζεστε στο έργο σας

## Επιπρόσθετες Πληροφορίες

- [Επίσημη Τεκμηρίωση Python](https://docs.python.org/)
- [Τεκμηρίωση Jupyter Notebook](https://jupyter-notebook.readthedocs.io/)
- [Οδηγός Εικονικών Περιβαλλόντων](https://docs.python.org/3/tutorial/venv.html)
- [Εναλλακτική Conda](https://docs.conda.io/en/latest/) - Άλλος δημοφιλής διαχειριστής περιβαλλόντων

Καλή επεξεργασία δεδομένων με την Python!