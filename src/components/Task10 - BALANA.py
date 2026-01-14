import pandas as pd
import matplotlib.pyplot as plt
from sklearn.datasets import load_iris
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

# --- 1. Load and Prepare the Dataset (The Data) ---
# The Iris dataset has 4 features: Sepal Length, Sepal Width, Petal Length, Petal Width
iris = load_iris()
X = iris.data
y = iris.target # We'll use the 'y' (target) only for coloring the final plot, not for training PCA

feature_names = iris.feature_names
df = pd.DataFrame(X, columns=feature_names)

# --- 2. Preprocessing: Standardize the Data (The Preparation) ---
# PCA is sensitive to scale, so we must standardize the features (mean=0, variance=1)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# --- 3. Apply PCA (The Dimensionality Reduction) ---
# We want to reduce the 4 features down to 2 Principal Components (n_components=2)
n_components = 2
pca = PCA(n_components=n_components)
principal_components = pca.fit_transform(X_scaled) # PCA is fit and applied in one step

# Create a DataFrame for the two new components
pca_df = pd.DataFrame(
    data = principal_components, 
    columns = [f'Principal Component {i+1}' for i in range(n_components)]
)

# Add the original target/class names for visualization purposes
pca_df['Target'] = iris.target_names[y]

# --- 4. Evaluate and Visualize (The Output) ---

print("--- Original Data Shape ---")
print(X.shape) # (150, 4) - 4 dimensions
print("\n--- Reduced Data Shape ---")
print(principal_components.shape) # (150, 2) - 2 dimensions

# Report how much variance (information) was retained
explained_variance = pca.explained_variance_ratio_
print("\n--- Explained Variance Ratio ---")
print(f"PC1 accounts for: {explained_variance[0]*100:.2f}% of variance")
print(f"PC2 accounts for: {explained_variance[1]*100:.2f}% of variance")
print(f"Total variance retained by 2 components: {sum(explained_variance)*100:.2f}%")


# Visualize the 2D data
plt.figure(figsize=(8, 8))
targets = iris.target_names
colors = ['r', 'g', 'b']

for target, color in zip(targets, colors):
    indices_to_keep = pca_df['Target'] == target
    plt.scatter(
        pca_df.loc[indices_to_keep, 'Principal Component 1'],
        pca_df.loc[indices_to_keep, 'Principal Component 2'],
        c = color,
        s = 50
    )

plt.xlabel('Principal Component 1')
plt.ylabel('Principal Component 2')
plt.title(f'2 Component PCA of Iris Dataset ({sum(explained_variance)*100:.1f}% Variance Retained)')
plt.legend(targets)
plt.grid()
plt.show()