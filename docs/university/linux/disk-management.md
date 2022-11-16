# 磁盘管理

## 查看分区情况
``` shell
df

可选项
-h 人类可读方式显示
-T 查看文件类型
```
``` shell
df -h

Filesystem      Size  Used Avail Use% Mounted on
devtmpfs        857M     0  857M   0% /dev
tmpfs           868M     0  868M   0% /dev/shm
tmpfs           868M  516K  867M   1% /run
tmpfs           868M     0  868M   0% /sys/fs/cgroup
/dev/vda1        40G  2.1G   36G   6% /
tmpfs           174M     0  174M   0% /run/user/0
```

## 查看储存设备列表
``` shell
lsblk
```
``` shell
lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0   40G  0 disk 
├─sda1   8:1    0  300M  0 part /boot
├─sda2   8:2    0    8G  0 part /home
├─sda3   8:3    0    8G  0 part /usr
├─sda4   8:4    0    1K  0 part 
├─sda5   8:5    0    8G  0 part /var
├─sda6   8:6    0    4G  0 part [SWAP]
├─sda7   8:7    0    1G  0 part /tmp
└─sda8   8:8    0 10.7G  0 part /
sr0     11:0    1 1024M  0 rom  
```

## 查看所占容量大小
``` shell
du
```

``` shell
查看 /etc 所占容量大小
du -sh /etc
```

## 查看块设备信息
``` shell
blkid
```
``` shell
blkid  

/dev/sda1: UUID="c67538bb-c83a-42cb-a280-de59facf7be7" TYPE="xfs" 
/dev/sda2: UUID="a8675c95-dd36-441d-9996-35af08e21e44" TYPE="xfs" 
/dev/sda3: UUID="b1f03612-747e-4bf9-b0e7-7f02940b0e4b" TYPE="xfs" 
/dev/sda5: UUID="cbd2f683-4ef4-4eaf-b875-e778a7cdd24b" TYPE="xfs" 
/dev/sda6: UUID="ed0c8949-9fb9-4767-a890-c7d425ac076e" TYPE="swap" 
/dev/sda7: UUID="3b72fe5a-eb76-47ee-803b-ec1ac2145509" TYPE="xfs" 
/dev/sda8: UUID="3c69a0a3-a1cd-4c7f-86ce-399bf936f42c" TYPE="xfs" 
```

## 查看硬盘和分区信息
``` shell
fdisk -l
```
``` shell
fdisk -l

Disk /dev/vda: 42.9 GB, 42949672960 bytes, 83886080 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0x000b770c

   Device Boot      Start         End      Blocks   Id  System
/dev/vda1   *        2048    83886046    41941999+  83  Linux
```

## 磁盘分区
``` shell
fdisk
```

``` shell
对 /dev/sdb 进行分区操作
fdisk /dev/sdb
```

## 格式化分区
``` shell
mkfs

可选项
-t 文件系统类型
```

``` shell
格式化 sdb1 并指定文件系统类型为 xfs

mkfs -t xfs /dev/sdb1
或者
mkfs.xfs /dev/sdb1
```

## 挂载分区
``` shell
mount 需要挂载的分区 目标位置
```

``` shell
把 /dev/sdb1 挂载到 /sdb/sdb1
mount /dev/sdb1 /sdb/sdb1
```

取消挂载
``` shell
unmout /dev/sdb1
```