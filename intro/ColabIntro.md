-----

# Οδηγίες Χρήσης του Google Colab για Αρχάριους στην Εφαρμοσμένη Μηχανική Μάθηση

Το Google Colab είναι ένα δωρεάν, cloud-based περιβάλλον Jupyter Notebook που σας επιτρέπει να γράφετε και να εκτελείτε κώδικα Python απευθείας στον browser σας, χωρίς να χρειάζεται καμία εγκατάσταση. Είναι ιδανικό για μηχανική μάθηση, καθώς παρέχει πρόσβαση σε δωρεάν GPUs και TPUs.

-----

## 1\. Ξεκινώντας με το Colab

Για να ξεκινήσετε, απλά μεταβείτε στο [colab.research.google.com](https://colab.research.google.com/). Μπορείτε να δημιουργήσετε ένα **νέο notebook** επιλέγοντας "File" \> "New notebook".

-----

## 2\. Άνοιγμα Έτοιμων `.ipynb` Αρχείων

Το Colab σας επιτρέπει να ανοίγετε υπάρχοντα Jupyter Notebooks (`.ipynb` αρχεία) από διάφορες πηγές.

### Από τον Υπολογιστή σας

1.  Ανοίξτε το Colab ([colab.research.google.com](https://colab.research.google.com/)).
2.  Επιλέξτε "File" \> "**Upload notebook**".
3.  Πατήστε "Choose File" και αναζητήστε το `.ipynb` αρχείο στον υπολογιστή σας.

### Από το Google Drive

Εάν έχετε αποθηκευμένα notebooks στο Google Drive σας:

1.  Ανοίξτε το Colab.
2.  Επιλέξτε "File" \> "**Open notebook**".
3.  Μεταβείτε στην καρτέλα "**Google Drive**".
4.  Πλοηγηθείτε στον φάκελο όπου βρίσκεται το notebook σας και επιλέξτε το.

Εναλλακτικά, μπορείτε να κάνετε διπλό κλικ σε ένα αρχείο `.ipynb` απευθείας από το Google Drive σας και να επιλέξετε "Άνοιγμα με" \> "**Google Colaboratory**".

### Από το GitHub

Το Colab ενσωματώνεται άψογα με το GitHub, επιτρέποντάς σας να ανοίγετε notebooks απευθείας από repositories:

1.  Ανοίξτε το Colab.
2.  Επιλέξτε "File" \> "**Open notebook**".
3.  Μεταβείτε στην καρτέλα "**GitHub**".
4.  Εισάγετε τη διεύθυνση URL του GitHub repository, τον χρήστη/οργανισμό, ή κάντε αναζήτηση για ένα συγκεκριμένο notebook. Για παράδειγμα, μπορείτε να αναζητήσετε `tensorflow/docs` για να βρείτε επίσημα παραδείγματα της TensorFlow.

### Από τη Διεύθυνση URL

Εάν έχετε μια απευθείας διεύθυνση URL προς ένα `.ipynb` αρχείο (π.χ., ένα raw αρχείο από το GitHub Gist ή άλλο web server):

1.  Ανοίξτε το Colab.
2.  Επιλέξτε "File" \> "**Open notebook**".
3.  Μεταβείτε στην καρτέλα "**GitHub**" (ναι, ακόμα και για γενικές URLs, αυτή η καρτέλα χρησιμοποιείται).
4.  Επικολλήστε τη διεύθυνση URL του `.ipynb` αρχείου στο πεδίο αναζήτησης και πατήστε Enter.

-----

## 3\. Βασικές Λειτουργίες του Colab Notebook

Ένα Colab notebook αποτελείται από **κελιά (cells)**. Υπάρχουν δύο τύποι κελιών:

  * **Κελιά κώδικα (Code cells):** Εδώ γράφετε και εκτελείτε τον κώδικα Python. Για να εκτελέσετε ένα κελί, πατήστε το εικονίδιο "Play" (τρίγωνο) ή πατήστε `Shift + Enter`.
  * **Κελιά κειμένου (Text cells):** Χρησιμοποιούνται για προσθήκη επεξηγήσεων, τίτλων ή σημειώσεων χρησιμοποιώντας Markdown.

-----

## 4\. Σύνδεση με το Google Drive

Είναι πολύ χρήσιμο να συνδέσετε το Colab με το Google Drive σας για να αποθηκεύετε τα notebooks σας και να έχετε εύκολη πρόσβαση σε αρχεία.

```python
from google.colab import drive
drive.mount('/content/drive')
```

Αφού εκτελέσετε αυτό το κελί, θα σας ζητηθεί να εξουσιοδοτήσετε την πρόσβαση. Μετά την επιτυχή σύνδεση, τα αρχεία του Drive σας θα είναι προσβάσιμα στον φάκελο `/content/drive/My Drive/`.

-----

## 5\. Εγκατάσταση Βιβλιοθηκών

Το Colab έρχεται με πολλές προεγκατεστημένες βιβλιοθήκες, αλλά μπορεί να χρειαστεί να εγκαταστήσετε επιπλέον για τις ανάγκες του μαθήματος. Χρησιμοποιούμε το `pip` για την εγκατάσταση. Το θαυμαστικό `!` στην αρχή της εντολής επιτρέπει την εκτέλεση εντολών shell (τερματικού) μέσα σε ένα κελί Colab.

```python
# Εγκατάσταση TensorFlow
!pip install tensorflow

# Εγκατάσταση SciPy
!pip install scipy

# Εγκατάσταση scikit-learn
!pip install scikit-learn

# Εγκατάσταση Pandas
!pip install pandas

# Εγκατάσταση NumPy
!pip install numpy

# Εγκατάσταση Matplotlib
!pip install matplotlib

# Εγκατάσταση Plotly
!pip install plotly

# Εγκατάσταση Plotnine (απαιτεί ggplot2, συνήθως εγκαθίσταται μαζί)
!pip install plotnine

# Εγκατάσταση Seaborn
!pip install seaborn
```

-----

## 6\. Χρήση του GitHub με το Colab

Το Colab ενσωματώνεται άψογα με το GitHub. Εκτός από το άνοιγμα notebooks (που αναφέρθηκε παραπάνω), μπορείτε να:

### Αποθήκευση Notebook στο GitHub

Μπορείτε να αποθηκεύσετε το notebook σας απευθείας στο GitHub:

1.  Επιλέξτε "File" \> "**Save a copy in GitHub**".
2.  Θα σας ζητηθεί να συνδεθείτε στο GitHub και να εξουσιοδοτήσετε το Colab.
3.  Επιλέξτε το repository και το όνομα αρχείου για το notebook σας.

### Κλωνοποίηση Repository (Προχωρημένο)

Μπορείτε επίσης να κλωνοποιήσετε ένα ολόκληρο repository στο περιβάλλον του Colab, κάτι που είναι χρήσιμο αν χρειάζεστε πολλά αρχεία από ένα repository (π.χ., δεδομένα, βοηθητικά scripts).

```python
# Αντικαταστήστε με τη διεύθυνση URL του repository σας
!git clone https://github.com/your-username/your-repo.git
```

Μετά την κλωνοποίηση, τα αρχεία του repository θα βρίσκονται στον φάκελο `/content/your-repo/`.

-----

## 7\. Διάβασμα Αρχείων `csv.zip`

Συχνά, τα δεδομένα παρέχονται σε συμπιεσμένη μορφή, όπως `.zip`. Για να διαβάσετε ένα αρχείο `csv` μέσα σε ένα `.zip` χωρίς να το αποσυμπιέσετε χειροκίνητα, μπορείτε να χρησιμοποιήσετε τη βιβλιοθήκη `pandas`.

```python
import pandas as pd
import zipfile
import io

# Έστω ότι έχετε ένα αρχείο 'data.zip' στο Google Drive σας
# και περιέχει ένα αρχείο 'my_data.csv'
zip_file_path = '/content/drive/My Drive/data.zip'
csv_file_name_in_zip = 'my_data.csv'

# Διάβασμα του zip αρχείου
with zipfile.ZipFile(zip_file_path, 'r') as z:
    with z.open(csv_file_name_in_zip) as f:
        df = pd.read_csv(f)

# Εμφάνιση των πρώτων γραμμών του DataFrame
print(df.head())
```

**Εναλλακτικά (πιο απλό για ένα μόνο CSV μέσα σε ZIP):**

Αν το zip αρχείο περιέχει μόνο ένα αρχείο CSV, το `pandas` μπορεί συνήθως να το διαβάσει απευθείας:

```python
import pandas as pd

# Έστω ότι έχετε ένα αρχείο 'data.zip' στο Google Drive σας
zip_file_path = '/content/drive/My Drive/data.zip'

# Το pandas μπορεί να διαβάσει απευθείας από zip αρχεία
df = pd.read_csv(zip_file_path)

# Εμφάνιση των πρώτων γραμμών του DataFrame
print(df.head())
```

-----

## 8\. Βασικά Παραδείγματα Χρήσης Βιβλιοθηκών

Ακολουθούν μερικά απλά παραδείγματα για το πώς μπορείτε να χρησιμοποιήσετε τις βιβλιοθήκες που εγκαταστήσατε.

### NumPy (Για αριθμητικούς υπολογισμούς)

```python
import numpy as np

arr = np.array([[1, 2, 3], [4, 5, 6]])
print("NumPy Array:\n", arr)
print("Shape of array:", arr.shape)
```

### Pandas (Για χειρισμό δεδομένων)

```python
import pandas as pd

data = {'Name': ['Alice', 'Bob', 'Charlie'],
        'Age': [25, 30, 35],
        'City': ['New York', 'London', 'Paris']}
df = pd.DataFrame(data)
print("\nPandas DataFrame:\n", df)
print("\nDescription of data:\n", df.describe())
```

### Matplotlib & Seaborn (Για οπτικοποίηση δεδομένων)

```python
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Δημιουργία κάποιων δεδομένων
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Matplotlib plot
plt.figure(figsize=(8, 4))
plt.plot(x, y, label='sin(x)')
plt.title('Simple Sine Wave with Matplotlib')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.legend()
plt.grid(True)
plt.show()

# Seaborn plot
data = sns.load_dataset('iris')
plt.figure(figsize=(8, 5))
sns.scatterplot(x='sepal_length', y='sepal_width', hue='species', data=data)
plt.title('Iris Sepal Length vs Width with Seaborn')
plt.show()
```

### Plotly (Για διαδραστικά γραφήματα)

```python
import plotly.express as px
import pandas as pd

df = px.data.iris()
fig = px.scatter(df, x="sepal_width", y="sepal_length", color="species",
                 title="Interactive Iris Scatter Plot with Plotly")
fig.show()
```

### Plotnine (Grammar of Graphics για Python)

```python
from plotnine import ggplot, aes, geom_point, labs
import pandas as pd
import numpy as np

# Δημιουργία DataFrame
df_plotnine = pd.DataFrame({
    'x': np.random.rand(50),
    'y': np.random.rand(50),
    'group': np.random.choice(['A', 'B'], 50)
})

(ggplot(df_plotnine, aes(x='x', y='y', color='group'))
 + geom_point()
 + labs(title='Plotnine Example Scatter Plot',
        x='Random X', y='Random Y'))
```

### Scikit-learn (Για μοντελοποίηση μηχανικής μάθησης)

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import numpy as np

# Δημιουργία ψεύτικων δεδομένων
X = np.random.rand(100, 1) * 10
y = 2 * X + 1 + np.random.randn(100, 1) * 2

# Διαχωρισμός δεδομένων σε σύνολα εκπαίδευσης και δοκιμής
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Δημιουργία και εκπαίδευση μοντέλου Γραμμικής Παλινδρόμησης
model = LinearRegression()
model.fit(X_train, y_train)

# Προβλέψεις και αξιολόγηση
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)

print(f"\nMean Squared Error: {mse:.2f}")
print(f"Coefficients: {model.coef_[0][0]:.2f}")
print(f"Intercept: {model.intercept_[0]:.2f}")
```

### TensorFlow (Για βαθιά μάθηση)

```python
import tensorflow as tf
from tensorflow import keras
import numpy as np

# Δημιουργία ψεύτικων δεδομένων για ένα απλό μοντέλο ταξινόμησης (από το MNIST dataset)
(x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()
x_train = x_train.reshape(-1, 28*28).astype('float32') / 255.0
x_test = x_test.reshape(-1, 28*28).astype('float32') / 255.0

# Δημιουργία ενός απλού νευρωνικού δικτύου
model = keras.Sequential([
    keras.layers.Input(shape=(784,)),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(10, activation='softmax')
])

# Συγκρότηση (compile) του μοντέλου
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Εκπαίδευση του μοντέλου (μόνο για λίγες εποχές για ταχύτητα)
print("\nTraining a simple TensorFlow model...")
model.fit(x_train, y_train, epochs=1, batch_size=32, validation_split=0.1)

# Αξιολόγηση του μοντέλου
test_loss, test_acc = model.evaluate(x_test, y_test, verbose=0)
print(f"Test Accuracy (TensorFlow): {test_acc:.4f}")
```

-----

Αυτός ο οδηγός θα σας βοηθήσει να ξεκινήσετε με το Google Colab για το μάθημα εφαρμοσμένης μηχανικής μάθησης. Μη διστάσετε να πειραματιστείτε με τον κώδικα και να εξερευνήσετε τις δυνατότητες κάθε βιβλιοθήκης\!
