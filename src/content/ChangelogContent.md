# <center>.:: XeroLinux Changelog ::.</center>

<br />

Below is a list of changes. Fresh install is no longer needed if you are already on 25/05 ISO, just run the **upall** command and you should be good to go.  

If you on 25/05 release, once updated, to enable new **Floating Panel**, just right click on it "Edit > More Options > Floating".  


#### - Changelog 16/06/2022 :
<br />

- **KDE Plasma** updated to 5.25.0 initial release expect bugs.(*)  
- **KDE Frameworks** updated to 5.95 including all packages.  
- New **QT6 Libraries** added and **QT5 Libraries** updated to latest.  
- **Floating Panel** enabled by default. Will be applied to all rices soon.  
- All included packages updated to latest available as of ISO release/upload.  

#### - Changelog 25/05/2022 :  
<br />

- **Calamares** updated to latest.   
- **YaY** added alongside **Paru** for Y'all.   
- New revamped tool now called **XeroTool**.
- New **XeroLinux XL** Repo for larger packages.
- No more **ArcoLinux** Repos. Just ours.
- **PipeWire** is now the default Audio Server.
- Added **nVidia-Prime** Drivers to Calamares.
- Default FileSystem selection is now **XFS**.
- No more Package Selection In **Calamares**.
- New **BTRFS/Snapper** tools in case you use that FS.
- New Post Install Package Installer (via tool).
- Tweaked **SDDM** Config for Optimus users.
- **nVidia-dkms-tkg** Driver Stack used instead of Official.(**)
- New Button in **Calamares** to follow along during install.
- All **GPU** Drivers moved to Calamares no longer on ISO.
- Less boot options on **USB Boot**, no more confusion.
- New **Rice Switcher** via the new **XeroTool**.
- Tons of under-the-hood tweaks &amp; optimizations.
- Tweaked the default Rice making it better.
- New simple **Grub** theme included.
- **Wayland** Session removed from ISO.(***)
- **Snaps** Support removed from **Pamac.**
- **AutoComposer** added for better gaming experience.
- Added **XeroTool** icon to System Tray for easy access.

<details open>
<summary>Notes Please read...</summary>
<p class="bg">
* : Make sure to go over this thread to know more about the current situation with => <a
href="https://forum.xerolinux.xyz/thread-137.html"
target="_blank"
rel="noreferrer"
>
<span> Plasma 5.25 Realease…</span>
</a>.
</p>
<p class="bg">
** : We opted to use the span>TKG</span> patched versions of the 515 nVidia driver stack. We will stick with those from here on in, as they preform better & are more stable than the Official ones. Available from our new <span>nVidia Repo</span>.
<a
href="https://forum.xerolinux.xyz/thread-124.html"
target="_blank"
rel="noreferrer"
>
<span> nVidia Driver Troubleshooting</span>
</a>
</p>
<p class="bg">
*** : You will be able to add
span> “Wayland Support” </span>
via the span> “XeroLinux Tool” </span>. Only recommended if you are using
span>AMD GPU</span>. If you are on <span>nVidia</span> I would recommend you wait
for support to get better.../p>
/details>

That’s it for now.. Hope you enjoy our latest release of
**XeroLinux** ;)
