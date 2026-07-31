# Push to GitHub: hmaza123/Hamida-s-Salon-Studio

This cloud agent cannot log into GitHub without a token.

## Option A — Personal Access Token (recommended)

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate token with `repo` scope
3. Send the token in chat (or run locally):

```bash
cd hamidas-salon
git remote set-url origin https://<TOKEN>@github.com/hmaza123/Hamida-s-Salon-Studio.git
git push -u origin main
```

## Option B — Upload ZIP

Upload `hamidas-salon-studio.zip` in the empty repo:
GitHub repo → Add file → Upload files

## Repo

https://github.com/hmaza123/Hamida-s-Salon-Studio
