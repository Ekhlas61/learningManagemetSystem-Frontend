# 🚀 Deployment Guide

## Quick Deployment Steps

### 1. Frontend Deployment (Vercel) - Recommended

#### Option A: Deploy from GitHub
1. **Push to GitHub** (if not already done):
   ```bash
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js
   - Add environment variables:
     ```
     NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
     NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
     ```
   - Click "Deploy"

#### Option B: Deploy with Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

### 2. Backend Deployment

#### Option A: Railway (Recommended)
1. **Fork/Clone Backend**:
   ```bash
   git clone https://github.com/Kidusbk/LMS.git
   cd LMS
   ```

2. **Deploy on Railway**:
   - Go to [railway.app](https://railway.app)
   - Sign in with GitHub
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your backend repository
   - Add environment variables:
     ```
     DATABASE_URL=postgresql://username:password@host:port/database
     JWT_SECRET=your-super-secret-jwt-key
     PORT=3001
     ```
   - Railway auto-deploys

#### Option B: Render
1. Go to [render.com](https://render.com)
2. Connect GitHub repository
3. Choose "Web Service"
4. Add environment variables
5. Deploy

#### Option C: Heroku
1. Go to [heroku.com](https://heroku.com)
2. Create new app
3. Connect GitHub
4. Add PostgreSQL addon
5. Set environment variables
6. Deploy

### 3. Database Setup

#### For Railway:
- Railway provides PostgreSQL automatically
- Copy the connection string to `DATABASE_URL`

#### For Render:
- Add PostgreSQL service
- Copy connection string

#### For Heroku:
- Add Heroku Postgres addon
- Copy connection string

### 4. Environment Variables

#### Frontend (.env.local):
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.com
```

#### Backend:
```env
DATABASE_URL=postgresql://username:password@host:port/database
JWT_SECRET=your-super-secret-jwt-key
PORT=3001
```

## 🎯 Recommended Deployment Stack

### **Best Option: Vercel + Railway**
- **Frontend**: Vercel (free tier, excellent Next.js support)
- **Backend**: Railway (free tier, easy PostgreSQL setup)
- **Database**: Railway PostgreSQL

### **Alternative: Netlify + Render**
- **Frontend**: Netlify (free tier)
- **Backend**: Render (free tier)
- **Database**: Render PostgreSQL

## 🔧 Post-Deployment Steps

1. **Update Frontend Environment**:
   - Copy backend deployment URL
   - Update `NEXT_PUBLIC_API_URL` in Vercel dashboard

2. **Test Integration**:
   - Visit frontend URL
   - Try registering/logging in
   - Check if courses load from backend

3. **Custom Domain** (Optional):
   - Add custom domain in Vercel/Railway settings
   - Update environment variables with new domain

## 🐛 Troubleshooting

### Common Issues:
1. **CORS Errors**: Backend needs to allow frontend domain
2. **Database Connection**: Check `DATABASE_URL` format
3. **JWT Issues**: Ensure `JWT_SECRET` is set
4. **Build Failures**: Check Node.js version compatibility

### Debug Steps:
1. Check deployment logs in Vercel/Railway dashboard
2. Test backend API directly with Postman
3. Verify environment variables are set correctly
4. Check browser console for frontend errors

## 📊 Monitoring

### Vercel:
- Built-in analytics
- Performance monitoring
- Error tracking

### Railway:
- Application logs
- Database metrics
- Resource usage

## 🔄 Updates

To update deployment:
```bash
git add .
git commit -m "Update message"
git push origin main
```
- Vercel auto-deploys on push
- Railway auto-deploys on push

## 💰 Cost Estimation

### Free Tiers:
- **Vercel**: Free for personal projects
- **Railway**: $5/month after free credits
- **Render**: Free tier available
- **Netlify**: Free for personal projects

### Paid Options:
- **Vercel Pro**: $20/month
- **Railway Pro**: $20/month
- **Render**: $7/month

## 🎉 Success!

Once deployed, you'll have:
- ✅ Live frontend at `https://your-app.vercel.app`
- ✅ Live backend at `https://your-backend.railway.app`
- ✅ Real authentication and data persistence
- ✅ Automatic deployments on code changes

