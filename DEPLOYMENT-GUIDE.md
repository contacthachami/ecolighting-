# 🚀 Quick Deployment & QR Code Guide

## Step 1: Test Locally

### Using VS Code Live Server:

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Your browser will open at `http://127.0.0.1:5500`

### Using Python (if installed):

```bash
cd ecolighting
python -m http.server 8000
```

Then visit: `http://localhost:8000`

## Step 2: Deploy Online (FREE)

### 🎯 Option 1: Netlify Drop (Easiest - No Account Needed)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the entire `ecolighting` folder
3. You'll get a URL like: `https://random-name-123.netlify.app`
4. **Optional**: Create account to customize URL to `https://ecolighting-social.netlify.app`

### 🎯 Option 2: Netlify CLI (More Control)

```bash
# Install Netlify CLI (one-time)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from ecolighting folder
cd ecolighting
netlify deploy --prod

# Follow prompts - get custom URL!
```

### 🎯 Option 3: GitHub Pages (Free Hosting)

```bash
# 1. Create new GitHub repository
# 2. Push your ecolighting folder

git init
git add .
git commit -m "Ecolighting Social Hub"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# 3. Go to repo Settings > Pages
# 4. Select main branch, / (root)
# 5. Your URL: https://USERNAME.github.io/REPO_NAME/
```

### 🎯 Option 4: Vercel (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd ecolighting
vercel --prod
```

## Step 3: Generate QR Code

### Method 1: QR Code Generator (Recommended)

1. **Visit**: [https://www.qr-code-generator.com/](https://www.qr-code-generator.com/)
2. **Select**: URL
3. **Enter**: Your deployed URL (e.g., `https://ecolighting-social.netlify.app`)
4. **Customize**:
   - Logo: Upload `logo.Ecolighting.png` to center
   - Colors: Use Ecolighting green (`#0a6b3c`) and yellow (`#ffcc00`)
   - Frame: Choose eco-friendly frame if available
5. **Download**: High resolution PNG (300 DPI for printing)

### Method 2: QRCode Monkey (Free, No Watermark)

1. **Visit**: [https://www.qrcode-monkey.com/](https://www.qrcode-monkey.com/)
2. **Enter URL**: Your deployed website
3. **Set Colors**:
   - Eye color: `#0a6b3c` (Ecolighting green)
   - Body color: `#108e51` (Secondary green)
   - Background: `#ffffff` (White)
4. **Add Logo**: Upload `logo.Ecolighting.png`
5. **Choose Quality**: High (minimum 3000x3000 pixels)
6. **Download**: PNG format

### Method 3: QR Code Generator API (Automated)

```html
<!-- Use Google Charts API -->
<img
  src="https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=YOUR_URL&choe=UTF-8"
  alt="QR Code"
/>
```

## Step 4: Testing QR Code

### Test Checklist:

- [ ] Scan with iPhone Camera app
- [ ] Scan with Android Camera app
- [ ] Scan with WhatsApp QR scanner
- [ ] Test on different lighting conditions
- [ ] Verify all social links work
- [ ] Check mobile responsiveness

### Recommended QR Code Sizes:

| Use Case       | Minimum Size | Recommended   |
| -------------- | ------------ | ------------- |
| Business Card  | 2cm x 2cm    | 2.5cm x 2.5cm |
| Flyer/Poster   | 3cm x 3cm    | 5cm x 5cm     |
| Banner/Signage | 10cm x 10cm  | 20cm x 20cm   |
| T-shirt/Merch  | 5cm x 5cm    | 8cm x 8cm     |

## Step 5: Print & Use

### For Business Cards:

- **Format**: PNG with transparent background
- **Size**: 2.5cm x 2.5cm
- **Resolution**: 300 DPI minimum
- **Placement**: Back of business card
- **Add text**: "Scan for all our social media"

### For Posters/Flyers:

- **Format**: PNG or SVG (vector)
- **Size**: 5cm x 5cm or larger
- **Add Call-to-Action**:
  - "📱 Connect with us"
  - "Scan to follow Ecolighting"
  - "Stay updated on Instagram & Facebook"

### For Product Packaging:

- **Format**: Vector (SVG) for best quality
- **Size**: 3cm x 3cm minimum
- **Placement**: Product label or box
- **Weather-proof**: Use laminated stickers for outdoor products

## 📊 Analytics (Optional)

### Track QR Code Scans:

Use a URL shortener with analytics:

1. **Bitly**:

   ```
   https://bitly.com/
   - Shorten your deployed URL
   - Get scan statistics
   - See geographic data
   ```

2. **TinyURL with tracking**:

   ```
   https://tinyurl.com/app
   - Create custom short URL
   - Track clicks/scans
   ```

3. **QR Code with built-in tracking**:
   - Use QR Code Generator PRO
   - Get real-time scan analytics

## 🎨 Customization Tips

### Add Ecolighting Branding to QR Code:

1. **Logo in Center**:
   - Use `logo.Ecolighting.png`
   - Max size: 20% of QR code area
   - Background: White circle for contrast

2. **Custom Colors**:
   - Primary: `#0a6b3c` (Green)
   - Secondary: `#ffcc00` (Yellow)
   - Background: White or light green (`#e0f5e9`)

3. **Frame Text Options**:
   - "ECOLIGHTING"
   - "Scan to Connect"
   - "Follow Us"
   - "🌱 Eco-Friendly Lighting"

## 🔧 Troubleshooting

### QR Code Won't Scan:

- ✅ Ensure minimum 2cm x 2cm size
- ✅ Check sufficient contrast (dark on light background)
- ✅ Don't over-customize (keep standard QR structure)
- ✅ Test in good lighting
- ✅ Keep logo max 20% of QR size

### Website Loads Slowly:

- ✅ Optimize images (compress logo if > 100KB)
- ✅ Use CDN for fonts and icons
- ✅ Enable caching on hosting platform

### Links Not Working:

- ✅ Verify all URLs are correct
- ✅ Check HTTPS is working
- ✅ Test on mobile devices

## 📱 Best Practices

1. **Always use HTTPS** for deployed website
2. **Test on multiple devices** before printing
3. **Keep QR code updated** - use same URL, update content
4. **Add call-to-action** near QR code
5. **Ensure good contrast** for scanning
6. **Leave white space** around QR code (quiet zone)

## 🎯 Marketing Ideas

### Where to Use Your QR Code:

- ✅ Business cards
- ✅ Product packaging
- ✅ Email signatures (as image)
- ✅ Instagram bio link
- ✅ Storefront window
- ✅ Trade show booths
- ✅ Promotional materials
- ✅ Invoice/receipts
- ✅ Newsletter
- ✅ Vehicle signage
- ✅ T-shirts and merchandise

## 📈 Next Steps

After deployment:

1. **Share the link** on existing social media
2. **Add to email signature**
3. **Include in marketing materials**
4. **Print QR codes** for physical touchpoints
5. **Monitor analytics** to track engagement
6. **Update content** regularly to keep fresh

---

## 🆘 Need Help?

**Common URLs after deployment:**

- Netlify: `https://ecolighting-social.netlify.app`
- GitHub Pages: `https://yourusername.github.io/ecolighting/`
- Vercel: `https://ecolighting.vercel.app`

**Replace with your actual deployed URL when creating QR code!**

---

**Built with 💚 by Ecolighting Team**

_Making sustainability accessible, one scan at a time_
